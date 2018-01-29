logArray = [];
logArray[0] = false;

logEntries = document.getElementById("logEntries");
li_1 = document.createElement("li");
entry_1 = "The First Entry - There is a trash can here.";
text_1 = document.createTextNode(entry_1);
li_1.appendChild(text_1);
logEntries.appendChild(li_1);
logArray[1] = true;


function addEntry() {
	if(itemAmountArray[1] == 10 && logArray[2] == undefined) {
		li_2 = document.createElement("li");
		entry_2 = "BANANA - Lots of banana peels. Wonder what I will do with them.";
		text_2 = document.createTextNode(entry_2);
		li_2.appendChild(text_2);
		logEntries.appendChild(li_2);
		logArray[2] = true;
	}
	
	if(itemAmountArray[1] >= 50 && itemAmountArray[2] >= 50 && itemAmountArray[3] >= 50 && logArray[3] == undefined) {
		li_3 = document.createElement("li");
		entry_3 = "A Fly - Look at that, a fly. And the fly brought friends. I am surrounded by flies, how nice.";
		text_3 = document.createTextNode(entry_3);
		li_3.appendChild(text_3);
		logEntries.appendChild(li_3);
		logArray[3] = true;
	}
	
}