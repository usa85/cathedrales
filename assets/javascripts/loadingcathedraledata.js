let basedescription;
basedescription = document.querySelector("#contents").innerHTML;
let previousPrimaryID;
let basePath = '';

function clickfunction(id){
    console.log(id);
    let content = document.querySelector("#contents");
    content.innerHTML= '<h5>'+cathedraled[id].noms +'</h5><p>' + cathedraled[id].description ; 
    // let picture = document.createElement("img")
    // picture.src=cathedraled[id].pictureURL;
    // content.appendChild(picture);

    filterMarkers(cathedraled[id].primaryID);
    previousPrimaryID = cathedraled[id].primaryID;
};

function filterMarkers(primaryID){
    if(markers.clean){
        filterCleanMarkers(primaryID);
    }else{
        swapCathedralMarkers(primaryID);
        markers[primaryID].setMap(map);
    }
}

function filterCleanMarkers(primaryID){
    markers.clean = false;
    for (var marker in markers){
        if (marker != "clean" && marker != primaryID){
            markers[marker].setMap(null);
        }
    }
}

function swapCathedralMarkers(primaryID){
    if( previousPrimaryID && previousPrimaryID != primaryID){
        markers[previousPrimaryID].setMap(null);
    } 
}



   let description=document.querySelector("#descriptionHeader");
    description.addEventListener('click', ()=>{
        let content = document.querySelector("#contents");
        content.innerHTML=basedescription;
        resetMarkers();
    });


    for (i = 0; i < cathedraled.length; i++) {
        let cathlist = document.querySelector("#cathlist");
        //console.log(list);
        //console.log(cenotaph2[i].name);

        let cathelement = document.createElement("li");

        cathelement.innerHTML = '<span onclick="clickfunction('+(i)+ ')">' + cathedraled[i].noms + "</strong> <br><i>" + cathedraled[i].lieux +"</i>" + '</span>';
        cathlist.appendChild(cathelement);
    }
