function getHotelList(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            var mydata;
            mydata = JSON.parse(this.responseText);
            init(mydata);
            document.querySelector(".spinner").className = "spinner";
        }
    }
    xhttp.open('GET','https://api.myjson.com/bins/1bgnkq',true);
    xhttp.send();
    document.querySelector(".spinner").className+= " show";

}

getHotelList();



