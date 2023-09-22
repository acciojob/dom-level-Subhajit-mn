//your JS code here. If required.
	let levelElement = document.getElementById("level");
	let i=1;
	while(true){
		if(levelElement.tagName === "HTML"){
			break;
		}else{
			levelElement = levelElement.parentNode;
			i++;
		}
	}
	alert(`The level of the element is:  ${i}`);
