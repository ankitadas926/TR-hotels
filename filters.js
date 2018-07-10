var filter = {

    result : [],
    set : function(data){
        
        filter.filteredHotels = data.hotels || [],
        filter.hotelName = null,
        filter.star = [],
        filter.trpRating = null,
        filter.userRating = null,
        filter.minCost = null
        
    },

    bind : function(){

        elements.searchedHotel.addEventListener("keyup", function (event) {
            filterByName(searchedHotel.value.toLowerCase().trim());
        });

        elements.searchedStar.forEach(function(elem){
            elem.addEventListener("change",filterByStar);
        });
    },
    

    filterByName : function(searchedHotelName){

        filter.hotelName = searchedHotelName;
        if(filter.hotelName !=null){
            for(var i=0;i<filter.filteredHotels.length;i++){
                var hotelName=filter.filteredHotels[i].Name.toLowerCase();
                if(hotelName.indexOf(filter.hotelName)!= -1){
                    result.push(filter.filteredHotels[i]);            
                }                 
             }   
           }
           else{
               result = filter.filteredHotels;
           }
      
    },

    filterByStar : function(){
        
        var selectedStar = [];
        for(var i= 0; i<elements.searchedStar.length;i++){
            
            if(elements.searchedStar[i].checked == true){
                selectedStar.push(elements.searchedStar[i].value);
            }
         }
        filter.star=selectedStar;
          
        if(filter.star.length > 0){
            for(var i=0;i<filteredHotels.length;i++){         
                if(find(filter.star, filteredHotels[i].Stars)){
                    result.push(filteredHotels[i]);
                }
            }
            
        }
        
    },

    finish : function(){

        filter.filteredHotels = result;
        result = [];

    },

    init: function( data) {
        filter.set(data);
    }

    
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

