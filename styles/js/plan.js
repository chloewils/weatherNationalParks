$(document).ready(function () {

// national park callback
    var nationalParkUrl = "https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5";
    var searchTerm = $("#search-button" ).val();
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
$("#stateParks").text("");
    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?q=" +searchTerm + "&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7",
        method: "GET",
    })
    .then(function (response) {

        console.log('res', response)


// add the cards and then add the parks
        for(var i = 0; i < response.data.length; i++) {
        
            console.log(response.data[i])
    var a=$("<a>");
    var div = $("<div>");
            var currentPark = response.data[i]

            var parkName = currentPark.fullName
            var url = currentPark.url

        a.text(parkName);
        a.attr("target","_blank");
        a.attr("href",url);

        div.append(a);

        $("#stateParks").append(div);

    // $("body").append("<div><a href='" + url + "'>" + parkName + "</a></div>")

        }

    }, function(err) {
        console.log("Error", err)
    })
}

// Weather Data
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=987c73bd1a5fdefe46a4172c1fe33bcf' + '&units=imperial')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'] + "°F";
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    .catch(err => alert("Wrong Ciry Name!"));

})