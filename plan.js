// var nationalParkUrl = "developer.nps.gov/api/v1/parks?";
// ajax national park callback
// var nationalParkUrl = "developer.nps.gov/api/v1" + searchTerm;
// var searchTerm = $("#search-value").val();
//     $("#search-value").val("");
//     NationalPark(searchTerm);
//     NationalPark(searchTerm);

var nationalParkApi = function() {  
    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?" + searchTerm + "&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7",
        method: "GET",
        })

        .then(function (response) {
            console.log (error);
          });
        // success: function (result) {
        //     alert (result.data)
        // },
        //     error: function (error) {
           
        // }
    }

// 


// api:Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// web service request: https://developer.nps.gov/api/v1/parks?&api_key=Y0GGEH0NGqggHl4Eyf678f5geglMnqBzFvfV31k7

// create an environmental variables (Heroku)
