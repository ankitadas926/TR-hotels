var filter = {

    result : [],
    set : function(data){
        filter.allHotels = data.hotels || [],
        filter.filteredHotels = data.hotels || [],
        filter.hotelName = null,
        filter.star = [],
        filter.trpRating = null,
        filter.userRating = null,
        filter.minCost = null
        
    },
   

    filterByName : function(searchedHotelName){

        filter.hotelName = searchedHotelName;
        if(filter.hotelName !=null){
            for(var i=0;i<filter.allHotels.length;i++){
                var hotelName=filter.allHotels[i].Name.toLowerCase();
                if(hotelName.indexOf(filter.hotelName)!= -1){
                    filter.result.push(filter.allHotels[i]);            
                }                 
             }   
           }
           else{
               filter.result = filter.filteredHotels;
           }
        filter.finish();
      
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
            for(var i=0;i<filter.allHotels.length;i++){         
                if(find(filter.star, filter.allHotels[i].Stars)){
                    filter.result.push(filter.filteredHotels[i]);
                }
            }
            
        }
        else{
            filter.result = filter.allHotels;
        }
        filter.finish();
        
    },

    
    bind : function(){

        elements.searchedHotel.addEventListener("keyup", function (event) {
            filter.filterByName(elements.searchedHotel.value.toLowerCase().trim());
        });

        elements.searchedStar.forEach(function(elem){
            elem.addEventListener("change",filter.filterByStar);
        });
    },

    finish : function(){
        
        filter.filteredHotels = filter.result;
        filter.result = [];
        Pagination.Init(elements.pagination, {
            size: Math.ceil(filter.filteredHotels.length/10) , // pages size
            page: 1,  // selected page
            step: 3   // pages before and after current
        });
    },

    init: function( data) {
        filter.set(data);
        filter.bind();
        
    }

    
};



//Helper functions 

function find(arr,el){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==el){
            return true;
        }
    }
    return false;
}

