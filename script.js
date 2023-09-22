//your JS code here. If required.
const ele = document.getElementById("level");
let i=0;
while(true){
	if(level.Element.TagName === "HTML"){
		break;
	}else{
		ele = ele.ParentNode;
		i++;
	}
}
alert("The level of the element is: "+ i);