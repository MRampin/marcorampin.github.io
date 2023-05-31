$(document).ready(function() {

    const resizeHeight = () => {
		$('html').css('--maxHeight', window.innerHeight+'px');
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
