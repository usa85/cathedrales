let basedescription;
basedescription = document.querySelector("#content").innerHTML;

function clickfunction(id){
    console.log(id);
    let content = document.querySelector("#content");
    content.innerHTML= cathedraled[id].description; 
    // let picture = document.createElement("img")
    // picture.src=cathedraled[id].pictureURL;
    // content.appendChild(picture);
};

document.addEventListener("DOMContentLoaded", ()=>{

   let description=document.querySelector("#descriptionHeader");
    description.addEventListener('click', ()=>{
        let content = document.querySelector("#content");
        content.innerHTML=basedescription;
    });

    for (i = 0; i < cathedraled.length; i++) {
        let cathlist = document.querySelector("#cathlist");
        //console.log(list);
        //console.log(cenotaph2[i].name);

        let cathelement = document.createElement("li");

        cathelement.innerHTML = '<span onclick="clickfunction('+ (i) + ')"><strong>' + cathedraled[i].noms + "</strong> <br><i>" + cathedraled[i].lieux +"</i>" + '</span>';
        console.log(cathelement);


        cathlist.appendChild(cathelement);
    }
});