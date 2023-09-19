//your JS code here. If required.
const element = document.getElementById("level");
let i=0;
while(element = element.parentNode){
	if(element.getAttribute('id') === "level"){
		i++;
	}
}
alert("The level of the element is: "+ i);