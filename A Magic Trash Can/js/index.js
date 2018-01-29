function showNavCont(e, name) {
	var navlink;
	var navcontent;
	var i;
	
	
	navcontent = document.getElementsByClassName("navcontent");
	for(i = 0; i < navcontent.length; i++) {
		navcontent[i].style.display = "none";
	}
	
	navlink = document.getElementsByClassName("navlink");
	for(i = 0; i < navlink.length; i++) {
		navlink[i].className = navlink[i].className.replace(" active", "");
	}
	
	document.getElementById(name).style.display = "block";
	e.currentTarget.className += " active";
	
}

itemArray = ["Nothing","Banana peel","Dead rat","Chicken bones"];
itemIdArray = ["nothing","banana_peel","dead_rat","chicken_bones"];
descriptionArray = ["o[- _-]o",
"old and smelly, you cannot eat it",
"disgusting, the intestines are showing",
"nothing but but the bones, maybe there is some bone marrow"];
itemAmountArray = [0, 0, 0, 0];
bagArray = ["Notebook","Pen"];

searchCounter = 0;
searchBtn = document.getElementById("searchBtn");
foundSpan = document.getElementById("foundSpan");
bagBody = document.getElementById("bagBody");
bagItem = document.getElementsByClassName("bagItem");
bagTable = document.getElementById("bagTable");
var thisItem = {};
searchBtn.addEventListener("click", function() {
	searchCounter++;
	string = "";
	description = "";
	theIndex = 0;
	generateItem();
	foundSpan.innerHTML = string; //tells you what you found
	
	var isIn = false; //not in the array
	for(var i = 0; i < bagArray.length; i++) {
		if(string == bagArray[i]) {
			isIn = true; //is in the array
		}	
	}
	
	if(string != itemArray[0] && string != "ZHARNITE" && !isIn) { //adds only when it is not in the array, not nothing, and not zharnite
		addToBag();
	}
	else {
		addOne();
	}

	update();
});


function addToBag() {
	bagArray.push(string);
	newRow = bagTable.insertRow(bagTable.rows.length);
	newRow.className = "bagItem";
	newCell = newRow.insertCell(0);
	newText = document.createTextNode(string);
	newCell.appendChild(newText);
	
	newCell1 = newRow.insertCell(1);
	itemAmountArray[theIndex] = ++itemAmountArray[theIndex];
	newCell1.innerHTML = itemAmountArray[theIndex];
	newCell1.id = itemIdArray[theIndex];
	
	newCell2 = newRow.insertCell(2);
	newText2 = document.createTextNode(description);
	newCell2.appendChild(newText2);

}

function addOne() {
	
	itemAmountArray[theIndex] = ++itemAmountArray[theIndex];
	
	
}

function generateItem() {
	
	num = Math.floor(Math.random() * 100); //0-99
	if(num < 70) {
		theIndex = 0; 
	}
	else if(num < 80) {
		theIndex = 1;
	}
	else if(num < 90) {
		theIndex = 2;
	}
	else if(num < 100) {
		theIndex = 3;
	}
	else {
		string = "ZHARNITE"; 
	}
	string = itemArray[theIndex];
	description = descriptionArray[theIndex];
}

function update() {


	theEl = document.getElementById(itemIdArray[theIndex]);
	if(theEl !== null) {
		theEl.innerHTML = itemAmountArray[theIndex];
	}
	
	

	
	
	
}