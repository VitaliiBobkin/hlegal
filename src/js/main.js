import Swiper from 'swiper';
import 'swiper/css';
import '../scss/style.scss'
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';


(() => {
	const burgerBtn = document.querySelector('.header__box-burger');
	const headerNav = document.querySelector('.header__nav');
	const headerNavClose = document.querySelector('.header__nav-close');

	burgerBtn.addEventListener("click", () => {
		headerNav.classList.add('active')
	})

	headerNavClose.addEventListener('click', () => {
		headerNav.classList.remove('active')
	})
})();

(() => {
	const tabsItem = document.querySelectorAll('.tabs__links-item ');
	const tabsContent = document.querySelectorAll('.tabs__contents-item');

	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabsContent.forEach(content => {
				content.classList.remove('active')
			})
			tabsItem.forEach(tab => {
				tab.classList.remove('active')
			})

			tabsItem[index].classList.add("active")
			tabsContent[index].classList.add("active")
		})
	})
})();


const swiper = new Swiper('.swiper', {
	modules: [Pagination],

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 30,

	loop: true,
});