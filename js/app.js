/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Setting my globals Variables according to the index.html; to the ul 'navbar__list'
// I need to add the li elements and give them the predefined class of 'menu__link'.
// That why first get the ul and each section

const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// define my arrow function

const navMenu = () => {

	// creating an empty container für each nav item	
	let navCont = '';
	
	// looping through each section
	sections.forEach(section => {
		const secId = section.id;
		const secDataNav = section.dataset.nav;

		// adding content to the container
		navCont += `<li><a class='menu__link' data-page='${secDataNav}' href='#${secId}'>${secDataNav}</a></li>`;
	});

	// console.log(navCont);

	// adding all to the DOM
	navList.innerHTML = navCont;
}

// invoke my function
navMenu();

// Add class 'active' to section when near top of viewport

//  Providing information about the size of an element and its position relative to the viewport (MDN)
const secValue = (section) => {
	return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
	section.classList.remove('your-active-class');
}

const addActive = (conditional, section) => {
	if(conditional) {
		section.classList.add('your-active-class');
	};
};

const activeSection = () => {
	sections.forEach(section => {
		const element = secValue(section);

		isElementInViewport = () => element < 190 && element >= -150;

		removeActive(section);
		addActive(isElementInViewport(), section);
	});
};

window.addEventListener('scroll', activeSection);



// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a').forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(navLink.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu try .... not working

// Scroll to section on link click

// Set sections as active


// const sections = document.querySelectorAll('section'); already been declared
// const navMarkers = document.querySelector('.navMarker');
// const gradient = ["linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%)"];

// const options = {
// 	threshold: 0.7
// };


// let observer = new IntersectionObserver(navCheck, options);

// function navCheck(entries) {
// 	entries.forEach(entry => {
// 		console.log(entry);
// 		const sId = entry.target.id;
// 		console.log(sId);
// 		const activeAnchor = document.querySelector(`[data-page=${sId}]`);
// 		const gradientIndex = entry.target.getAttribute('data-index');
// 		const coords = activeAnchor.getBoundingClientRect();
// 		const directions = {
// 			height: coords.height,
// 			width: coords.width,
// 			top: coords.top,
// 			left: coords.left
// 		};

// 		if (entry.isIntersecting) {
// 			bubble.style.setProperty('left', `${directions.left}px`);
// 			bubble.style.setProperty('top', `${directions.top}px`);
// 			bubble.style.setProperty('width', `${directions.width}px`);
// 			bubble.style.setProperty('height', `${directions.height}px`);
// 			bubble.style.background = gradient;
// 		}
// 	});
// }

// 	sections.forEach(section => {
// 		observer.observe(section);
// 	});




























