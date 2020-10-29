$(document).$(function () {
    
// ajax national park callback
var nationalParkUrl = "developer.nps.gov/api/v1/parks?";
var searchTerm = $("#search-button").val();
    $("#search-button").val("");
    NationalParkFunction(searchTerm);
   
    / keyboard 'enter' button event
    $("#search-button").keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            NationalParkFunction(searchTerm);

// Search Storage and history row
    var history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length ==< 5) {
        NationalParkFunction(history[history.length - 1]);
    }
    for (var i = 0; i < history.length; i++) {
        createRow(history[i]);
    }
        
    function createRow(text) {
        var listItem = $("<li>").addClass("list-group-item").text(text);
        $(".history").append(listItem);
    }
    // list item click functionality listener
    $(".history").on("click", "li", function () {
        NationalParkFunction($(this).text());
        
});

function weatherFunction(searchTerm) {

var nationalParkApi = function() {  
    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?" + searchTerm + "&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7",
        method: "GET",
        }).then(function (response) {
            if (history.indexOf(searchTerm) === -1) {
                history.push(searchTerm);
                localStorage.setItem("history", JSON.stringify(history));
                createRow(searchTerm);
                console.log (error);
            }

        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        
        var lon = data.coord.lon;
        var lat = data.coord.lat;

          


        
// api:Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// web service request: https://developer.nps.gov/api/v1/parks?&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// create an environmental variables (Heroku)
