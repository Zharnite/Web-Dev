opened = false;
store1 = false;
the_game = document.getElementById("the_game");
navbar = document.getElementById("navbar");

function openShop() {
	if(itemAmountArray[1] > 5 && itemAmountArray[2] > 5 && itemAmountArray[3] > 5 && opened == false) {
		shop = document.createElement("div");
		shop.id = "shop";
		shop.className = "navcontent";
		shop.style.display = "none";
		
		the_game.appendChild(shop);
		
		shoptop = document.createElement("div");
		shoptop.innerHTML = "a shop lies here";
		shop.appendChild(shoptop);
		shop.appendChild(document.createElement("hr"));
		shoph2 = document.createElement("h2");
		shoph2.innerHTML = "Shop";
		shop.appendChild(shoph2);
		
		
		
		shopli = document.createElement("li");
		shopa = document.createElement("a");
		shopa.className = "navlink";
		shopa.addEventListener("click", function() {
			 showNavCont(event, 'shop');
		});
		
		shopa.innerHTML = "Shop";
		shopli.appendChild(shopa);
		
		navbar.insertBefore(shopli, navbar.children[3]);
		
		opened = true;
	}
	
	if(opened && !store1) {
		table = document.createElement("table");
		table.border = 1;
		caption = table.createCaption();
		caption.innerHTML = "<b>Market Goods</b>"
		thead = table.createTHead();
		headRow = thead.insertRow(table.rows.length);
		th1 = document.createElement("th");
		th1.innerHTML = "Name"
		headRow.appendChild(th1);
		th2 = document.createElement("th");
		th2.innerHTML = "Cost"
		headRow.appendChild(th2);
		th3 = document.createElement("th");
		th3.innerHTML = "Description"
		headRow.appendChild(th3);
		

		
		document.getElementById("shop").appendChild(table);
		
		tableB = document.createElement("table");
		tableB.border = 1;
		captionB = tableB.createCaption();
		captionB.innerHTML = "<b>The Machine that Pays</b>"
		theadB = tableB.createTHead();
		headRowB = theadB.insertRow(tableB.rows.length);
		thB1 = document.createElement("th");
		thB1.innerHTML = "Name"
		headRowB.appendChild(thB1);
		thB2 = document.createElement("th");
		thB2.innerHTML = "Cost"
		headRowB.appendChild(thB2);
		thB3 = document.createElement("th");
		thB3.innerHTML = "Wise Words"
		headRowB.appendChild(thB3);
		
		document.getElementById("shop").appendChild(tableB);
		
		store1 = true;
	}
	
}