
var hotelDetailsElement = document.getElementsByClassName("hotel-details-container")[0];

function filterByName(searchedHotelName){
    var hotels=mydata.Establishments;
    var searchedHotels = [];
    //var searchResultNumber=0;
    for(i=0;i<hotels.length;i++){
        var hotelName=hotels[i].Name.toLowerCase();
        if(hotelName.indexOf(searchedHotelName)!= -1){
            searchedHotels.push(hotels[i]);
            
        }
                 
     }
    
    return searchedHotels;
    
}


var hotelSearched = document.getElementsByName("hotel-name")[0];

hotelSearched.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            filteredHotels = filterByName(hotelSearched.value.toLowerCase());
            displayHotels(1);
        }
    });

