$(document).ready(function () {

    // ajax national park callback
    var nationalParkUrl = "https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5";
    var searchTerm = $("#search-button").val();
    $("#search-button").val("");
    NationalParkFunction(searchTerm);

    // Search Storage and history row
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

/*
function listQ() {
    var e = $("#states");
    if (e.selectedIndex > 0) {
        if ("Blank Test" === e.selectedIndex) { alert("yo"); }
    }
        else {
        lastIndex = "";

        document.getElementById("states").addEventListener("click", listQ);
    }
    searchTerm = e.selectedIndex;


}
*/

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

        /*
        
        }
        */

        // add the cards and then add the parks
        for(var i = 0; i < response.data.length; i++) {

            console.log(response.data[i])
            var currentPark = response.data[i]

            var parkName = currentPark.fullName
            var url = currentPark.url


            
            

           //$("<h3>").addClass("card-title").text(parkName + " (" + new Date().toLocaleDateString() + ")");
            
           $("body").append("<div><a href='" + url + "'>" + parkName + "</a></div>")

            /*

            var lon = data.coord.lon;
            var lat = data.coord.lat;

            */

        }


/*
        then(function (data) {
            console.log(data);
            $("#states").html("<h4 class=\"mt-3\">Local parks:</h4>").append("<div class=\"row\">");

        });

        */

    }, function(err) {
        console.log("Error", err)
    })

}
// api:DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT

// web service request: https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5

// create an environmental variables (Heroku)
