
var filteredHotels = mydata.Establishments;

function displayHotels(pageNumber){
    
    var hotelDetailsElement = document.getElementsByClassName("hotel-details-container")[0];
    var hotelDetailsHTML=" ";

    var upperBound = pageNumber*quantity;
    if (upperBound > filteredHotels.length)
    upperBound=filteredHotels.length;
    
    for(i=(pageNumber-1)*quantity;i<upperBound;i++){
        var hotelDetails=filteredHotels[i];
        hotelDetailsHTML += createHotelDetailsHTML(hotelDetails);       
    }
        
    hotelDetailsElement.innerHTML=hotelDetailsHTML;
    showCurrentPage(pageNumber);  
    
}

function createHotelDetailsHTML(hotelDetails){
    
    return  `<div class="hotel-details">
                <div class="hotel-image">
                    <img src="${hotelDetails.ImageUrl}">
                </div>
                <div class="hotel-text">
                    <div>${hotelDetails.Name}</div>
                    <div>${showStars(i)}</div>
                </div>
                <div class="hotel-cost">
                    <div>Price</div>
                    <div> &pound;${hotelDetails.MinCost}</div>
                    <button class="select-hotel">Select</button>
                </div>
            </div>`;
   
}

function showStars(i){
    var starIcon = "";
    var j = mydata.Establishments[i].Stars;
        for(i=0;i<j;i++){
            starIcon += `<i class="fas fa-star"></i>`
        }
    return starIcon;
}


displayHotels(pageNumber);

 



