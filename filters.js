var filter = {
    "hotelName" : null,
    "star" : [],
    "trpRating": null,
    "userRating" : null,
    "minCost" : null
}
var hotelSearched = document.getElementsByName("hotel-name")[0];
var searchedStar = document.querySelectorAll(".star-filter li");

function filterByName(searchedHotelName){
    filter.hotelName = searchedHotelName;
    filteredHotels=getfilteredHotel();
    pageBlock =0;
    pageNumberCreator(pageBlock);  
}

hotelSearched.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        filterByName(hotelSearched.value.toLowerCase().trim());
    }
});


var filterStarHTML = document.querySelectorAll(".star-filter li>input");
filterStarHTML.forEach(function(elem){
    elem.addEventListener("change",filterByStar);
});

function filterByStar(){
    
    var hotels=mydata.Establishments;
    var searchedHotels = [];
    var selectedStar=[];
    pageBlock =0;

    
    for(var i= 0; i<searchedStar.length;i++){
        var starCheckBox = searchedStar[i].getElementsByTagName("input")[0];
        if(starCheckBox.checked == true){
           selectedStar.push(starCheckBox.value);
        }
     }
    filter.star=selectedStar;

    
      
    filteredHotels=getfilteredHotel();  
    pageNumberCreator(pageBlock);  
}

function getfilteredHotel(){
   var hotels = mydata.Establishments;
   var filteredHotels = [];
   // filter by name

   if(filter.hotelName !=null){
    for(var i=0;i<hotels.length;i++){
        var hotelName=hotels[i].Name.toLowerCase();
        if(hotelName.indexOf(filter.hotelName)!= -1){
            filteredHotels.push(hotels[i]);            
        }                 
     }   
   }
   else{
       filteredHotels = hotels;
   }

   //filter by stars

    if(filter.star.length > 0){
        var fs = [];
        for(var i=0;i<filteredHotels.length;i++){         
            if(find(filter.star, filteredHotels[i].Stars)){
                fs.push(filteredHotels[i]);
            }
        }
        filteredHotels = fs;
    }


   return filteredHotels;

}


//Helper functions 

function find(arr,el){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==el){
            return true;
        }
    }
    return false;
}

