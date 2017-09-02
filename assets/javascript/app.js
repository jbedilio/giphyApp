$(document).ready(function() {
//array of giphs
var giphs = [ "puppy"]; //"dog", "kitten", "cat", "hamster", "bird", "turtle", "rabbit", "horse", "goat"];

//function to create giph buttons
function makeButtons() {
    //deletes the #giphs-view div each time a new giph is added, preventing repeat giph buttons 
    $('#giph-view').empty();
    
    for (var i = 0; i < giphs.length; i++) {
        console.log("first", giphs[i]);
        var $btn = $('<button>').css({"margin-top": "5px"});
        console.log("second", $btn);
        $btn.addClass('giphs');
        console.log("third", $btn);
        $btn.attr('data-name', giphs[i]);
        console.log("forth", $btn);
        $btn.text(giphs[i]);
        console.log('fifth', $btn);
        $('#giph-view').append($btn);
        console.log("fifth", '#giph-view');
        }
    }

makeButtons();

});