
document.getElementById("");
document.getElementById("");
document.getElementById("");
document.getElementById("");
document.getElementById("");

function gameLoad() {
	costWBEl.innerHTML = 5*levelWB;
}



findWBBtnEl = document.getElementById("findWBBtn");
WBNumEl = document.getElementById("WBNum");
WBNum = 0;
gainWB = 1;
findWBBtnEl.addEventListener("click", function() {
	WBNum += gainWB;
	WBNumEl.innerHTML = WBNum;
});

sellOneWBBtnEl = document.getElementById("sellOneWBBtn");
moneyEl = document.getElementById("money");
money = 0;
sellOneWBBtnEl.addEventListener("click", function() {
	gain = 1;
	if(WBNum > 0) {
		money += gain;
		moneyEl.innerHTML = money;
		WBNum--;
		WBNumEl.innerHTML = WBNum;
	}
});

sellAllWBBtnEl = document.getElementById("sellAllWBBtn");
sellAllWBBtnEl.addEventListener("click", function() {
	gain = 1;
	money += gain*WBNum;
	moneyEl.innerHTML = money;
	WBNum = 0;
	WBNumEl.innerHTML = WBNum;
});

upgradeWaterBtnEl = document.getElementById("upgradeWaterBtn");
upgradeWaterLevelEl = document.getElementById("upgradeWaterLevel");
costWBEl = document.getElementById("costWB");
waterLevel = 0;
levelWB = 1;
upgradeWaterBtnEl.addEventListener("click", function() {
	if(money >= (5*levelWB)) {
		waterLevel++;
		upgradeWaterLevelEl.innerHTML = waterLevel;
		gainWB++;
		money -= Math.floor(5*levelWB);
		moneyEl.innerHTML = money;
		levelWB *= 1.5;
		costWBEl.innerHTML = Math.floor(5*levelWB);
	}
});

FWBBtnEl = document.getElementById("FWBBtn");
FWBEl = document.getElementById("FWB");
WBEl = document.getElementById("WB");
FWBBtnEl.addEventListener("click", function() {
	if(WBNum >= 1) {
		WBNum -= 1;
		WBNumEl.innerHTML = WBNum;
		FWBEl.style.display = "none";
		FWBBtnEl.style.display = "none";
		WBEl.style.display = "block";
	}
});

SCunlockBtnEl = document.getElementById("SCunlockBtn");
SCunlockEl = document.getElementById("SCunlock");
divSCEl = document.getElementById("divSC");
sellSCEl = document.getElementById("sellSC");
priceSCEl = document.getElementById("priceSC");
BGunlockBtnEl = document.getElementById("BGunlockBtn");
BGunlockEl = document.getElementById("BGunlock");
tradeSCEl = document.getElementById("tradeSC");
upgradeSCEl = document.getElementById("upgradeSC");
SCunlockBtnEl.addEventListener("click", function() {
	if(money >= 1 && WBNum >= 1) {
		money -= 1;
		WBNum -= 1;
		SCunlockBtnEl.style.display = "none";
		SCunlockEl.style.display = "none";
		divSCEl.style.display = "block";
		sellSCEl.style.display = "block";
		priceSCEl.style.display = "block";
		BGunlockBtnEl.style.display = "inline";
		BGunlockEl.style.display = "inline";
		tradeSCEl.style.display = "block";
		upgradeSCEl.style.display = "block";
		
	}
});




