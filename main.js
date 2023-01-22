const mainPara = 'My expertise include project coordination, business analysis, and software development in several industries. My passions currently lie in blockchain technology and I am actively pursuing a career in this space.'
const buttons = ["WorkHistory", "Projects", "About Me", "Blog"];

let i = 0;
let isTypeWriterDone = false;
let twSpeed = 10;

document.getElementById("btn1").addEventListener("click", myFunction);
document.getElementById("btn2").addEventListener("click", myFunction);
document.getElementById("btn3").addEventListener("click", myFunction);
document.getElementById("btn4").addEventListener("click", myFunction);

//first step is to typewriter up the opening paragraph.
//basically fill p opener element with mainPara char by char
//TODO: begin with cursor blinking then type
//TODO: type second sentence seconds after first
function typeWriter() {
	if (i < mainPara.length){
		document.getElementById('opener').innerHTML += mainPara.charAt(i);
		i++;
		setTimeout(typeWriter, twSpeed);
	}
	else{
		i=0;
		isTypeWriterDone = true;
	}
}

//fade in buttons after opener loads
/*
function fadeIn(){
	let fadeTarget = document.getElementById("buttons");
	fadeTarget.style.opacity = 0;
	console.log(fadeTarget.style.opacity);
	let fadeEffect = setInterval(function(){
		console.log(fadeTarget.style.opacity);
		if (fadeTarget.style.opacity < 1) {
			fadeTarget.style.opacity += 0.1;
		}
		else{
			clearInterval(fadeEffect);
			console.log("THERE");
		}
	}, 100);
}*/

//TODO: onclick main menu items - bring up clicked item, fade out 
//body, and fade in content
function myFunction(clickedId){
	if(clickedId == "btn1"){
		//bring up clicked item, fade in content
		fadeOut();
	}
	else if(clickedId == "btn2"){

	}
	else if(clickedId == "btn3"){
		console.log("numba 3");
	}
	else if(clickedId == "btn4"){
		console.log("numba 4");
	}
	else
		console.log("failure or duplicate");
}

function fadeOut(){
	let fadeTarget = document.getElementById("opener");
	fadeTarget.style.opacity = 1;
	let fadeEffect = setInterval(function(){
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		}
		else{
			document.getElementById("buttons").remove();
			document.getElementById("opener").remove();
			clearInterval(fadeEffect);
		}
	}, 30);
}

function bringUpMenuItem(){

}

typeWriter();
//fadeIn(); //use promise to wait until TW is done