var mydata;
function getHotelList(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            mydata = JSON.parse(this.responseText);
            filteredHotels = mydata.Establishments;
            pageNumberCreator(pageBlock);
        }
    }
    xhttp.open('GET','https://api.myjson.com/bins/1bgnkq',true);
    xhttp.send();

}

getHotelList();