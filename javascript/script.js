$(document).ready(function() {
  	const introLeft = document.querySelector('#');
  	const introRight = document.querySelector('#');

    const resizeHeight = () => {
		$('.maxHeight').css('height', window.innerHeight+'px');
	}

    const loadFunctions = () => {
		resizeHeight();
	}

    window.addEventListener("resize", resizeHeight);
  	window.addEventListener('load', loadFunctions());
});
