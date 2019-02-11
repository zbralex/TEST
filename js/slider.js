(function slider () {
var btnLeft = document.querySelector('.banner__carousel-btn--left');
var btnRight = document.querySelector('.banner__carousel-btn--right');
var img = document.querySelectorAll(".banner__carousel-img");


function toggler() {

	for(var i = 0; i < img.length; i++) {
		img[i].classList.toggle('forward');
		img[i].classList.toggle('back');


		img[1].style.transition = "all ease .5s";
		img[0].style.transition = "all ease 1s";

	}
}

btnLeft.addEventListener('click', toggler);
btnRight.addEventListener('click', toggler);

}());