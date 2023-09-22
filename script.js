//your JS code here. If required.
	const levleElement = document.getElementById("level");
	let level=1;
	while(true){
		if(level.Element.tagName === "HTML"){
			break;
		}else{
			levelElement = levelElement.parentNode;
			level++;
		}
	}
	alert(`The level of the element is: ${level}`);
