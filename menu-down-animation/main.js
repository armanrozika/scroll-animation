let position = window.scrollY;


window.addEventListener('scroll', function(){
	position = window.scrollY;
	console.log(position);
})

function myPosition(query){
	let getId = document.querySelector(query).offsetTop;
	
	let scrollMe = setTimeout(function(){
		position+=5;
		myPosition(query);
	}, 1);

	let up = setTimeout(function(){
		position-=5;
		myPosition(query);
	}, 1);

	if(position>=getId){
		clearTimeout(scrollMe);
	}if(position<getId+4){
		clearTimeout(up);
	}
	
	window.scroll(0, position);
}	

function backTop(){
	let upBack = setTimeout(function(){
		position-=5;
		backTop();
	}, 1);
	
	if(position<2){
		clearTimeout(upBack);
		
	}
	window.scroll(0, position);
}

// FUCK YEAAAAHHHHHHHH..................!!!!!!!!!! IT WOooorrrrrrrrrrrrrrkkkkkk beibehhhhhhhh



