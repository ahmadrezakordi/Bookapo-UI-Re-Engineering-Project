function searchBooks(){
	results.className = "show";
	overlay.className = "show";
	
	var filteredData = productData.filter(el => el.title.indexOf(this.value) != -1 && this.value != "");
									
	fill_search(filteredData);	
	
}
	
function fill_search(jsonData){
	results.innerHTML = "";

	for(let i=0 ; i < jsonData.length ;i++){
	 
		let sr = document.createElement('div');

		sr.onclick = function(){
			showDetail(jsonData[i].id);
			overlay.className = "hide";
			results.className = "hide";
			search.value = "";
		}
	 
		let pic = document.createElement('img');
		pic.src = "D:/Sari/Bookapo/images/b" + jsonData[i].pic;

		let title = document.createElement('span');
		title.innerHTML = jsonData[i].title;
		
		sr.appendChild(pic);
		sr.appendChild(title);	

		results.appendChild(sr);
	}
}		
