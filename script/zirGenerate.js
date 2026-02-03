function generateCatItems(holderID,jsonDataItem){

    let it = document.createElement('div')
    it.className = "row1";

    let pic = document.createElement('img');
    pic.src = "../images/i" + jsonDataItem.catIcon;

    let li = document.createElement('p')
    li.innerHTML = jsonDataItem.catName;

    it.appendChild(pic);
    it.appendChild(li);		

    document.getElementById(holderID).appendChild(it);	
}

function zirCat1(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=0; i<7;i++){
	generateCatItems(holderID,jsonData[i]);
	}
}

function zirCat2(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=7; i<14;i++){
	generateCatItems(holderID,jsonData[i]);
	}
}

function zirCat3(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=14; i<20;i++){
	generateCatItems(holderID,jsonData[i]);
	}
}

