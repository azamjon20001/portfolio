

const menuButton = document.querySelector("#menu-button");
const menuWrapper = document.querySelector(".menu-wrapper");
const body = document.querySelector("#body");
const burgerText = document.querySelector(".menu-wrapper-ul__li");

menuButton.addEventListener('click',function(){
	menuButton.classList.toggle('closse');
	body.classList.toggle("no_scroll");
	menuWrapper.classList.toggle("shov");
	burgerText.classList.add("burger-text");
})

const colorDeveloperText = document.querySelector(".hero-section-bottom__title-right");

window.addEventListener('load',()=>{
	setTimeout(() => {
		colorDeveloperText1.style.color ='#fff'
	}, 5900);
})

const colorDeveloperText1 = document.querySelector(".hero-section-bottom__title-left");

window.addEventListener('load',()=>{
	setTimeout(() => {
		colorDeveloperText.style.color ='#fff'
	}, 5900);
})


const colorDeveloperText2 = document.querySelector(".hero-section-center__title");

window.addEventListener('load',()=>{
	setTimeout(() => {
		colorDeveloperText2.style.color ='#fff'
	}, 5500);
})



const section2 =document.querySelector(".section2");
const porfolio = document.querySelector(".portfolio");
const header = document.querySelector(".header");

porfolio.addEventListener('click',function(e){
	e.preventDefault();

	header.classList.add('header-none');
	section2.classList.add('section2-active');
})
