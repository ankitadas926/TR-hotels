var hotelSearched = document.getElementsByName("hotel-name")[0];

function filterByName(searchedHotelName){
    var hotels=mydata.Establishments;
    var searchedHotels = [];
    pageBlock =0;
    pageNumber =1;
    //var searchResultNumber=0;
    for(i=0;i<hotels.length;i++){
        var hotelName=hotels[i].Name.toLowerCase();
        if(hotelName.indexOf(searchedHotelName)!= -1){
            searchedHotels.push(hotels[i]);            
        }                 
     }   
    return searchedHotels;    
}

hotelSearched.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        filteredHotels = filterByName(hotelSearched.value.toLowerCase().trim());
        displayHotels(1);
    }
});

