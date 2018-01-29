opened = false;
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
}