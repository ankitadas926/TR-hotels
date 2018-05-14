var mydata;
function getHotelList(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            mydata = JSON.parse(this.responseText);

            filteredHotels = mydata.Establishments;
            pageNumberCreator(pageBlock);
        }
    }
    xhttp.open('GET','https://api.myjson.com/bins/1bgnkq',true);
    xhttp.send();

}

getHotelList();

var images =["Images\\img1.jpg",
            "Images\\img2.jpg",
            "Images\\img3.jpg",
            "Images\\img4.jpg",
            "Images\\img5.jpg",
            "Images\\img6.jpg",
            "Images\\img7.jpg",
            "Images\\img8.jpg",
            "Images\\img9.jpg",
            "Images\\img10.jpg",
            ];