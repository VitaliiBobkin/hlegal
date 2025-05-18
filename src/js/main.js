import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.scss';
import { Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	// Header burger menu toggle
	initBurgerMenu();

	// Tabs
	initTabs();

	// Active navigation link highlight
	initNavHighlight();

	// Swiper initialization
	initSwiper();

	// Services page-specific logic
	handleServicesPageFooter();
	handleServicesPageHead();
});

/**
 * Toggle header menu (burger)
 */
function initBurgerMenu() {
	const burgerBtn = document.querySelector('.header__box-burger');
	const headerNav = document.querySelector('.header__nav');
	const headerNavClose = document.querySelector('.header__nav-close');

	if (burgerBtn && headerNav && headerNavClose) {
		burgerBtn.addEventListener("click", () => headerNav.classList.add('active'));
		headerNavClose.addEventListener("click", () => headerNav.classList.remove('active'));
	}
}

/**
 * Tabs functionality
 */
function initTabs() {
	const tabLinks = document.querySelectorAll('.tabs__links-item');
	const tabContents = document.querySelectorAll('.tabs__contents-item');

	if (!tabLinks.length || !tabContents.length) return;

	tabLinks.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabLinks.forEach(t => t.classList.remove('active'));
			tabContents.forEach(c => c.classList.remove('active'));
			tab.classList.add('active');
			tabContents[index].classList.add('active');
		});
	});
}

/**
 * Highlight current nav link
 */
function initNavHighlight() {
	const links = document.querySelectorAll('.header__nav-link');

	links.forEach(link => {
		link.addEventListener('click', () => {
			links.forEach(l => l.classList.remove('active'));
			link.classList.add('active');
		});
	});
}

/**
 * Initialize Swiper
 */
function initSwiper() {
	const swiperContainer = document.querySelector('.swiper');
	if (!swiperContainer) return;

	new Swiper(swiperContainer, {
		modules: [Pagination],
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 30,
		loop: true,
	});
}

/**
 * Adjust footer styles for services page
 */
function handleServicesPageFooter() {
	if (!window.location.pathname.includes('services-page.html')) return;

	const footerBox = document.querySelector('.footer__box');
	const footerCopyright = document.querySelector('.footer__copyright');

	if (footerBox) {
		footerBox.classList.add('footer__box--narrow');
	}
	if (footerCopyright) {
		footerCopyright.classList.add('footer__copyright--narrow');
	}
}

/**
 * Adjust head styles for services page
 */
function handleServicesPageHead() {
	if (!window.location.pathname.includes('services-page.html')) return;

	const head = document.querySelector('.head');
	if (head) {
		head.style.minHeight = 'auto';
		head.style.background = 'none';
	}
}
