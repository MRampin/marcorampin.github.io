$(document).ready(function() {
  	const introLeft = document.querySelector('#');
  	const introRight = document.querySelector('#');

    const resizeHeight = () => {
		$('.maxHeight').css('height', window.innerHeight+'px');
		$('body').get(0).style.setProperty('--background','#f3f');
	}

    const loadFunctions = () => {
		resizeHeight();
	}

    window.addEventListener("resize", resizeHeight);
  	window.addEventListener('load', loadFunctions());
});

/*navbar hiding
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
}); */
