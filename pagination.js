
var filteredHotels = mydata.Establishments;
var quantity = 10;
var pagesInDisplay=10;
var pageBlock=0;
var currentPage = 0;
var pageNumber = 1;

var totalPages = Math.ceil(filteredHotels.length/quantity);
var totalPageBlocks = Math.ceil(totalPages/pagesInDisplay);

pageElement = document.getElementsByClassName("pageNumbers")[0];
nextPageBlockElement =document.getElementsByClassName("next")[0];
previousPageBlockElement =document.getElementsByClassName("previous")[0];



function pageNumberCreator(pageBlock){

    pageListHTML ="";
    var totalPageBlocks = Math.ceil(totalPages/pagesInDisplay);
   
        for(i=(pageBlock*pagesInDisplay)+1;i<=(pageBlock*pagesInDisplay)+pagesInDisplay;i++){
            if(i<=totalPages){
                pageListHTML += `<li onclick="displayHotels(${i})">${i}</li>` ;
                
            }
            
        }
    pageElement.innerHTML=pageListHTML;
    
}

function showCurrentPage(pageNumber){
    var a = document.getElementsByClassName("pagination")[0].getElementsByTagName("li");
        
    for(i=0;i<a.length;i++){
        if(a[i].className == "active-page"){
            a[i].className="";
        }
    
        if(a[i].innerHTML==pageNumber){
            a[i].className="active-page";
        }
    }
}


nextPageBlockElement.addEventListener("click", 
    function nextPageBlock(){
        if(pageBlock<totalPageBlocks-1){
            pageNumberCreator(++pageBlock);
        }    
    }
);

previousPageBlockElement.addEventListener("click",
    function previousPageBlock(){
        if(pageBlock){
            pageNumberCreator(--pageBlock);
        }
    }
);


pageNumberCreator(pageBlock);
