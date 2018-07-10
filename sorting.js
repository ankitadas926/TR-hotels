var sort={
    "priceSortFlag" : 1
};
var priceSortHTML = document.querySelector(".sort ul li+li+li");
priceSortHTML.addEventListener("click",function(event){
    sortByPrice();

} );

function sortByPrice(){
    
    var hotels = filter.filteredHotels;

    hotels.sort(function(a, b){
        return sort.priceSortFlag? a.MinCost-b.MinCost:b.MinCost-a.MinCost
    });
      
    
    if(sort.priceSortFlag==1){
        document.querySelector(".arrow-up").className+=" show";
        document.querySelector(".arrow-down").className="arrow-down";
    }
    if(sort.priceSortFlag==0){
        document.querySelector(".arrow-down").className+=" show";
        document.querySelector(".arrow-up").className="arrow-up";
    }

    sort.priceSortFlag = !sort.priceSortFlag;
    pageBlock = 0;
    filter.filteredHotels = hotels;
    pageNumberCreator(pageBlock); 

}
