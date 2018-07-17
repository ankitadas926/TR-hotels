var elements = {
    hotelNumber : document.getElementsByClassName("count")[0],
    pagination : document.getElementsByClassName('pagination')[0],
    hotelDisplay : document.getElementsByClassName("hotel-details-container")[0],
    searchedHotel : document.getElementsByName("hotel-name")[0],
    searchedStar : document.querySelectorAll(".star-filter li>input")
}  


/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function(mydata) {

    filter.init({
        hotels : mydata.Establishments,  //hotels to be displayed
    });

    document.addEventListener("pageChanged", function(e) { 
        display.init(elements.hotelDisplay, {
            hotels : filter.filteredHotels,  //hotels to be displayed
            page: e.detail.page,  // selected page
            quantity: 10   // pages before and after current
        });
    });

    Pagination.Init(elements.pagination, {
        size: Math.ceil(filter.filteredHotels.length/10) , // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });

    // display.init(elements.hotelDisplay, {
    //     hotels : filter.filteredHotels,  //hotels to be displayed
    //     page: Pagination.page,  // selected page
    //     quantity: 10   // pages before and after current
    // });

    

};