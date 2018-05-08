
var filteredHotels = mydata.Establishments;
var hotelNumberHTML = document.getElementsByClassName("count")[0];
var hotelDetailsElement = document.getElementsByClassName("hotel-details-container")[0];



function displayHotels(pageNumber){    
    var hotelDetailsHTML=" ";
    var upperBound = pageNumber*quantity;

    if (upperBound > filteredHotels.length){
        upperBound = filteredHotels.length;
    }
    
    for(var i=(pageNumber-1)*quantity; i<upperBound; i++){
        var hotelDetails = filteredHotels[i];
        hotelDetailsHTML += createHotelDetailsHTML(hotelDetails);       
    }
        
    hotelDetailsElement.innerHTML = hotelDetailsHTML;

    
    showCurrentPage(pageNumber);
    hotelNumberHTML.innerHTML=`Showing ${filteredHotels.length} of ${mydata.Establishments.length} Hotels`;    
}

function createHotelDetailsHTML(hotelDetails){
    
    return  `<div class="hotel-details">
                <div class="hotel-image">
                    <img src="${hotelDetails.ImageUrl}">
                </div>
                <div class="hotel-text">
                    <div>${hotelDetails.Name}</div>
                    <div>${showStars(hotelDetails.Stars)}</div>
                </div>
                <div class="hotel-cost">
                    <div>Price</div>
                    <div> &pound;${hotelDetails.MinCost}</div>
                    <button class="select-hotel">Select</button>
                </div>
            </div>`;   
}

function showStars(stars){
    var starIcon = "";
    for(var i=0; i<stars; i++){
        starIcon += `<i class="fas fa-star"></i>`
    }
    return starIcon;
}


pageNumberCreator(pageBlock);

 



