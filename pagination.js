
//var filteredHotels = mydata.Establishments;
var quantity = 10;
var pagesInDisplay=10;
var pageBlock=0;
var currentPage = 0;
var pageNumber = 1;
var totalPages = 0;
var totalPageBlocks = 0;

var pageinationEl = document.getElementsByClassName("pagination")[0];
var pageNumList = pageinationEl.getElementsByTagName("li");
pageElement = document.getElementsByClassName("pageNumbers")[0];
nextPageBlockElement =document.getElementsByClassName("next")[0];
previousPageBlockElement =document.getElementsByClassName("previous")[0];



function pageNumberCreator(pageBlock){

    if(filteredHotels.length>0 && !document.querySelector(".pagination.show")){
        pageinationEl.className += " show";
    }
    if(filteredHotels.length==0){
        pageinationEl.className = "pagination";
    }
    totalPages = Math.ceil(filteredHotels.length/quantity);
    totalPageBlocks = Math.ceil(totalPages/pagesInDisplay);
    pageListHTML ="";
    for(i=(pageBlock*pagesInDisplay)+1;i<=(pageBlock*pagesInDisplay)+pagesInDisplay;i++){
        if(i<=totalPages){
            pageListHTML += `<li onclick="displayHotels(${i})">${i}</li>` ;
            
        }
        
    }
  
    pageElement.innerHTML=pageListHTML;

    displayHotels((pageBlock*pagesInDisplay)+1);
    showCurrentPage((pageBlock*pagesInDisplay)+1);
  

    if(pageBlock==0){
        previousPageBlockElement.style.display="none";
    }
    else{
        previousPageBlockElement.style.display="inline";
    }
    if(pageBlock==totalPageBlocks-1){
        nextPageBlockElement.style.display="none";
    }
    else{
        nextPageBlockElement.style.display="inline";
    }
    
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



