$(document).ready(function () {

});

var nationalParkUrl = "developer.nps.gov/api/v1"

// print option //
$('.printMe').click(function () {
    window.print();
});
// search button function
$("#search-button").on("click", function () {
    var searchTerm = $("#search-value").val();
    $("#search-value").val("");
    weatherFunction(searchTerm);
    weatherForecast(searchTerm);
});

// keyboard 'enter' button event
$("#search-button").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    }
});

// Search Storage and history row
var history = JSON.parse(localStorage.getItem("history")) || [];


$.ajax({
    type: "GET",
    url: nationalParkUrl + "/amenities",
    success: function (result) {
        alert(result.data)
    },
    error: function (error) {
        console.log(error);
    }


})


// api:Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// web service request: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7