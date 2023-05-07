function hideAll(){
    document.querySelectorAll('.view-section').forEach(x=>{
        x.style.display='none'
    })
}


function showView(id){
    document.querySelector("#home-page").style.display='block'
}

export{hideAll,showView}