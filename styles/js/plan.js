$(document).$(function () {

    // ajax national park callback
    var nationalParkUrl = "https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5";
    var searchTerm = $("#search-button").val();
    $("#search-button").val("");
    NationalParkFunction(searchTerm);

// Search Storage and history row
    var history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length == < 5) {
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
    function listener(){
        var e = document.getElementById("#states");
        if(e.selectedIndex > 0){
            if("Blank Test" === e.selectedIndex){ alert("yo"); }
        }
        }searchTerm= e.selectedIndex;
    }
    else {
        searchTerm = "";
    }
    }
}

            });

            function nationalParkFunction(searchTerm) {

                var nationalParkApi = function () {
                    $.ajax({
                        url: "https://developer.nps.gov/api/v1/parks?" + searchTerm + "api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT"
                        method: "GET",
                    }).then(function (response) {
                        if (history.indexOf(searchTerm) === -1) {
                            history.push(searchTerm);
                            localStorage.setItem("history", JSON.stringify(history));
                            createRow(searchTerm);
                            console.log(error);
                        }

                        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");

                        var lon = data.coord.lon;
                        var lat = data.coord.lat;



                        then(function (data) {
                            console.log(data);
                            $("#states").html("<h4 class=\"mt-3\">Local parks:</h4>").append("<div class=\"row\">");
                

// api:DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT

// web service request: https://developer.nps.gov/api/v1/parks?q=Seattle&api_key=DSwWcrFQxBpoiqq12vYeLPVcimOUMrdngmDgePeT&stateCode=WA&limit=5

// create an environmental variables (Heroku)
