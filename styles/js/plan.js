$(document).ready(function () {

// national park callback
    var nationalParkUrl = "https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5";
    var searchTerm = $("#search-button").val();
    $("#search-button").val("");
    NationalParkFunction(searchTerm);

// search storage and history row
    var history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length < 0) {
        NationalParkFunction(history[history.length - 1]);
    }

    for (var i = 0; i < history.length; i++) {
        createRow(history[i]);
    }

});

function createRow(text) {
    var listItem = $("<li>").addClass("list-group-item").text(text);
    $(".history").append(listItem);
}
// list item click functionality listener

$('#states').change(function () {
    let selectedState = $("#states option:selected").val()
    console.log(selectedState)
    nationalParkFunction(selectedState)
});

function nationalParkFunction(searchTerm) {

    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?q=" +searchTerm + "&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7",
        method: "GET",
    })
    .then(function (response) {

        console.log('res', response)


// add the cards and then add the parks
        for(var i = 0; i < response.data.length; i++) {

            console.log(response.data[i])
            var currentPark = response.data[i]

            var parkName = currentPark.fullName
            var url = currentPark.url

           $("body").append("<div><a href='" + url + "'>" + parkName + "</a></div>")

        }

    }, function(err) {
        console.log("Error", err)
    })
}

// Weather Data
