// ajax national park callback
var nationalParkUrl = "developer.nps.gov/api/v1" + searchTerm;
var searchTerm = $("#search-value").val();
    $("#search-value").val("");
    NationalPark(searchTerm);
    NationalPark(searchTerm);

var nationalParkApi = function(apiEndPoint) {  
    $.ajax({
        type: "GET",
        url: nationalParkUrl + apiEndPoint, 
        headers: {
            api_key:"Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7"
        },
        success: function (result) {
            alert (result.data)
        },
            error: function (error) {
            console.log (error);
        }
    })
}

onDocument.ready() {
    var parks = nationalParkApi("/parks");

}


// api:Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// web service request: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// create an environmental variables (Heroku)
