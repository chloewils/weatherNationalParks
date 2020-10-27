var nationalParkUrl = "developer.nps.gov/api/v1";
// ajax national park callback
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



// api:Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// web service request: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

