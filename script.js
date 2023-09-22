//your JS code here. If required.
const ele = document.getElementById("level");
let i=0;
while(true){
	if(ele.Element.tagName === "HTML"){
		break;
	}else{
		ele = ele.ParentNode;
		i++;
	}
}
alert("The level of the element is: "+ i);