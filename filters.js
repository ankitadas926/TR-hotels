var hotelSearched = document.getElementsByName("hotel-name")[0];

function filterByName(searchedHotelName){
    var hotels=mydata.Establishments;
    var searchedHotels = [];
    pageBlock =0;
        
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
        pageNumberCreator(pageBlock);
    }
});





function filterByStar(selectedStar){
    // var searchedStar = document.getElementsByClassName("star-filter")[0].getElementsByTagName("li");
    // for(var i= 0; i<searchedStar.length;i++){
    //     if(searchedStar[i].getElementsByTagName("input")[0].checked = true){
    //         filterByStar(searchedStar[i].getElementsByTagName("input")[0].value);
    //     }
    // }
    var hotels=mydata.Establishments;
    var searchedHotels = [];
    pageBlock =0;
        
    for(i=0;i<hotels.length;i++){
        var hotelStar=hotels[i].Stars;
        if(hotelStar == selectedStar){
            searchedHotels.push(hotels[i]);            
        }                 
     }   
    filteredHotels=searchedHotels;  
    pageNumberCreator(pageBlock);  
}

