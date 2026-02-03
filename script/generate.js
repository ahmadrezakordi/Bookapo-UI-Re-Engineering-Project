
/*dynamic generation*/

function generateBookItems(holderID,jsonDataItem){

    let it = document.createElement('div');
    it.className = "items";
        
    it.addEventListener("click",() => {showDetail(jsonDataItem.id);});
        
      let pic = document.createElement('img');
      pic.src = "D:/Sari/Bookapo/images/b" + jsonDataItem.pic;

    it.appendChild(pic);

    let info = document.createElement('div');
    info.className = "info";

      let title = document.createElement('h2');
      title.innerHTML = jsonDataItem.title;

      let wr = document.createElement('span');
      wr.className = "writer";
      wr.innerHTML = jsonDataItem.writer;	
      
      let holder = document.createElement('div');
      holder.className = "holder";

      let time = document.createElement('span');
      time.className = "time";
      time.innerHTML = jsonDataItem.time + "دقیقه";

      let score = document.createElement('span');
      score.className = "score";
      score.innerHTML = jsonDataItem.score;

      let add = document.createElement('span');
      add.className = "add";
      add.innerHTML = "افزودن به کتابخانه";

      holder.appendChild(time);
      holder.appendChild(score);
		

    info.appendChild(title);
    info.appendChild(wr);
    info.appendChild(holder);
    info.appendChild(add);	
        
    it.appendChild(info);		
        
    document.getElementById(holderID).appendChild(it);	
}

function fillWithBooks(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=0; i<10;i++){
	generateBookItems(holderID,jsonData[i]);
	}
}

function fillWithBooks2(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=10; i<20;i++){
	generateBookItems(holderID,jsonData[i]);
	}
}

function fillWithBooks3(holderID,jsonData){
document.getElementById(holderID).innerHTML = "";

	for(let i=13; i<23;i++){
	generateBookItems(holderID,jsonData[i]);
	}
}
