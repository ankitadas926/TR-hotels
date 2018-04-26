
var filteredHotels = mydata.Establishments;
var quantity = 10;
var pagesInDisplay=10;
var pageBlock=0;
var currentPage = 0;
var pageNumber = 1;
var totalPages = 0;
var totalPageBlocks = 0;

var pageNumList = document.getElementsByClassName("pagination")[0].getElementsByTagName("li");
pageElement = document.getElementsByClassName("pageNumbers")[0];
nextPageBlockElement =document.getElementsByClassName("next")[0];
previousPageBlockElement =document.getElementsByClassName("previous")[0];



function pageNumberCreator(pageBlock){

    totalPages = Math.ceil(filteredHotels.length/quantity);
    totalPageBlocks = Math.ceil(totalPages/pagesInDisplay);
    pageListHTML ="";
    for(i=(pageBlock*pagesInDisplay)+1;i<=(pageBlock*pagesInDisplay)+pagesInDisplay;i++){
        if(i<=totalPages){
            pageListHTML += `<li onclick="displayHotels(${i})">${i}</li>` ;
            
        }
        
    }
    pageElement.innerHTML=pageListHTML;
    
}

function showCurrentPage(pageNumber){
            
    for(i=0;i<pageNumList.length;i++){
        if(pageNumList[i].className == "active-page"){
            pageNumList[i].className="";
        }
    
        if(pageNumList[i].innerHTML==pageNumber){
            pageNumList[i].className="active-page";
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



