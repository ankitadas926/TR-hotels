var display = {
    code : '',

    set : function(data){

        display.hotels = data.hotels || [];
        display.total = data.hotels.length ;
        display.quantity = data.quantity || 10;
        display.page = data.page ||1;
        display.first = (display.page - 1) * display.quantity;
        display.last = ((display.page * display.quantity) > display.total) ? display.total : (display.page * display.quantity);
    },

    create : function(){
        for(var i=display.first; i< display.last; i++){
            display.code += display.html(display.hotels[i]);       
        }
    },

    html : function(hotelDetails){
        return `<div class="hotel-details">
                <div class="hotel-image">
                    <img src="${display.images[Math.floor(Math.random()*10)]}">
                </div>
                <div class="hotel-text">
                    <div>${hotelDetails.Name}</div>
                    <div>${display.stars(hotelDetails.Stars)}</div>
                </div>
                <div class="hotel-cost">
                    <div>Price</div>
                    <div>&#8377;${hotelDetails.MinCost}</div>
                    <button class="select-hotel">Select</button>
                </div>
            </div>`
    },
  
    stars : function(stars){
        var starIcon = "";
        for(var i=0; i<stars; i++){
        starIcon += `<i class="fas fa-star"></i>`
        }
        return starIcon;
    },

    images : ["Images\\img1.jpg",
            "Images\\img2.jpg",
            "Images\\img3.jpg",
            "Images\\img4.jpg",
            "Images\\img5.jpg",
            "Images\\img6.jpg",
            "Images\\img7.jpg",
            "Images\\img8.jpg",
            "Images\\img9.jpg",
            "Images\\img10.jpg",
    ],

    finish: function(e) {
        e.innerHTML = display.code;
        display.code = '';
        elements.hotelNumber.innerHTML=`Showing ${filter.filteredHotels.length} of ${filter.allHotels.length} Hotels`;
    },

    init: function(e, data) {
        display.set(data);
        display.create();
        display.finish(e);

    }
}










   // showCurrentPage(pageNumber);
   //     







 



