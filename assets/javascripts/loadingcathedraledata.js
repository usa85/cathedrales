document.addEventListener("DOMContentLoaded", () => {

    for (i = 0; i < cathedraled.length; i++) {
        let cathlist = document.querySelector("#cathlist");
        //console.log(list);
        //console.log(cenotaph2[i].name);
        let cathelement = document.createElement("li");
        cathelement.innerText = cathedraled[i].noms;
        console.log(cathelement);


        cathlist.appendChild(cathelement);
    }
});