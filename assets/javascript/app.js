$(document).ready(function() {
//starting array of giphs
var giphs = [ "Will Ferrell", "Jason Sudeikis", "Charlie Day", "James Franco", "Seth Rogen", "Kristen Wiig", "Zack Galifianakis",                 "Kate McKinnon", "Melissa McCarthy", "Tina Fey"];
//function to generate the ajax request and utilize the the response (i.e. function that pulls the giphs)
function pullGiphs() {
    //var that holds the button/element value clicked on and concatenates into the queryURL var completing the ajax request
    var giph = $(this).attr('data-name')
    //var holding the incomplete url for the ajax request, waiting on the giph var to concatenate and complete the url
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=1e1310e23de94135a921363415524870&limit=10";
    //ajax function requesting data with the "GET" method
    $.ajax({
        url: queryURL,
        method: "GET"
    //.done function instructing the computer how to use the response (with limit 10 giphs) from the ajax request: 
    }).done(function(response){
        console.log(response);
        //the for loop to loop through the response (limit 10)
        for(var i = 0; i < response.data.length; i++) {
            //setting a var viewDiv to hold the dynamically created divs all w/ the same class="giph"
            var viewDiv = $('<div class="giph">');
            console.log(viewDiv);
            //setting the var rating to hold each object's value for rating 
            var rating = response.data[i].rating;
            //setting the var R to hold dynamically created paragraph elements with the object's rating concatenated into the content
            var R = $('<p>').text('Rating: ' + rating);
            //setting the var giphImage to hold the dynamically created img elements (limit 10)
            var giphImage = $('<img class="gif">');
            //giving the img elements the attribute src and setting it to a path that provides a smaller starting still image
            giphImage.attr('src', response.data[i].images.downsized_still.url)
            //adding the attributes data-still, data-animate, and data-state for toggling b/t paused and animated states of the img
            .attr('data-still', response.data[i].images.downsized_still.url)
            .attr('data-animate', response.data[i].images.downsized.url)
            .attr('data-state', 'still');
            console.log(giphImage);

            //prepending the giphImage var with the img elements to the viewDiv var (i.e. the dynamically created divs w/ class="giph")
            viewDiv.prepend(giphImage).append(R);
            console.log(viewDiv);
            //prepending the viewDiv var containing the dynamic divs w/ class="giph" and the img elements to the html div w/ id="view"
                    //this is where the img elements each inside it's own div will display on the page 
            $('#view').prepend(viewDiv);
        }; 
    });
};

//function to create giph buttons
function makeButtons() {
    //deletes the #giphs-view div each time a new giph is added, preventing repeat giph buttons 
    $('#giph-buttons').empty();
    //for loop that loops through the entire array, rendering a button for each index of the array
    for (var i = 0; i < giphs.length; i++) {
        console.log("first", giphs[i]);
        //dynamically creating a button through JQuery with css styling to prevent each button from touching one another
        var $btn = $('<button>').css({"margin": "5px 5px"});
        console.log("second", $btn);
        //adding the class="giphs" to the newly dynamically created buttons
        $btn.addClass('giphs');
        console.log("third", $btn);
        //adding the data-name attribute to the buttons
        $btn.attr('data-name', giphs[i]);
        console.log("forth", $btn);
        //gives each button a text lable matching the text of the element in the array
        $btn.text(giphs[i]);
        console.log('fifth', $btn);
        //locates each button in the div with the id="giph-view"
        $('#giph-buttons').append($btn);
        console.log("sixth", $btn);
        }
    }
//this functin adds a click event listener to the Add A Giph button
$("#add-giph").on('click', function (event){
    console.log('click', event);
    /*this function prevents the page from refreshing & duplicating the current buttons 
        each time the Add A Giph/submit button is clicked*/
    event.preventDefault();
    //this var holds the text label as entered into the text box input area, trimming off extra white space
    var giph = $('#giph-input').val().trim();
    console.log(giph);
    //this function adds the text from the text box input area to the giphs array
    giphs.push(giph);
    //this line empties the text input box for the user automatically once the add button is clicked
    $('#giph-input').val("");
    //calling the makeButtons(); function, b/c it handles the processing of the buttons
    makeButtons();
})
//using the document on click event listener to pull the giphs onto the page when a giph button is clicked
$(document).on('click', '.giphs', pullGiphs);
    console.log(pullGiphs);
//using the document on click event listener to toggle the data-state of the giphs from still to animated
$(document).on('click', '.gif', function(){
    //setting the vars for the if else statement
    let $this = $(this);
    state = $this.data('state');
    console.log('state', $(this).data('state'));
    //if statement creating the on click toggle from data state still to animate
    if ('still' === state) {
        console.log('animate that shiz');
        $this.attr('src', $this.data('animate'));
        $this.data('state', 'animate');
    //else statement creating the on click toggle from data state animate to still
    } else {
        console.log('still that shiz');
        $this.attr('src', $this.data('still'));
        $this.data('state', 'still');
    };
});
//calling the makeButtons(); function again to handle the button processing
makeButtons();
});