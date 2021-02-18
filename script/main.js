

const menuButton = document.querySelector("#menu-button");
const menuWrapper = document.querySelector(".menu-wrapper");

menuButton.addEventListener('click',function(){
	menuButton.classList.toggle('closse');
	
	menuWrapper.classList.toggle("shov")
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

