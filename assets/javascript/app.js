$(document).ready(function() {
//starting array of giphs
var giphs = [ "puppy"]; //"dog", "kitten", "cat", "hamster", "bird", "turtle", "rabbit", "horse", "goat"];

function showGiph() {
    //var that holds the button/element value clicked on and concatenates into the queryURL var completing the ajax request
    var giph = $(this).attr('data-name')
    //var holding the incomplete ajax request, waiting on the giph var to concatenate and complete the request
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=1e1310e23de94135a921363415524870&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);
    })




}

//function to create giph buttons
function makeButtons() {
    //deletes the #giphs-view div each time a new giph is added, preventing repeat giph buttons 
    $('#giph-view').empty();
    //for loop that loops through the entire array, rendering a button for each index of the array
    for (var i = 0; i < giphs.length; i++) {
        console.log("first", giphs[i]);
        //dynamically creating a button through JQuery with a css class for styling
        var $btn = $('<button>').css({"margin-top": "5px"});
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
        $('#giph-view').append($btn);
        console.log("sixth", $btn);
        }
    }
//this functin adds a click event listener to the Add A Giph button
$("#add-giph").on('click', function (event){
    console.log('click', event);
    /*this function prevents the page from refreshing & duplicating the current buttons 
        each time the Add A Giph/submit button is clicked*/
    event.preventDefault()

    var giph = $('#giph-input').val().trim();

})
makeButtons();

});