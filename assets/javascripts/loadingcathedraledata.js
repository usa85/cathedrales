document.addEventListener("DOMContentLoaded", ()=>{

    for (i = 0; i < cathedraled.length; i++) {
        let catlist = document.querySelector("#catlist");
        //console.log(list);
        //console.log(cenotaph2[i].name);
        let element = document.createElement("li");
        element.innerText = cathedraled[i].noms;
        console.log(element);
        
      
        catlist.appendChild(element);
    }});