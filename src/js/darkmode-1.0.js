/***
 * Dark Mode Toggle
 * 
 * Author: Jim Diroff II
 * Version: 1.0
 * 
 * This toggle works in conjunction with an inline script in the <head> tag to 
 * enable dark mode toggling. The inline script checks `Local Storage` for a
 * theme selection before rendering the page. Prevents flickering of unstyled
 * content on reload. This script sets or removes the theme variable.
 */

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
	root.classList.toggle('dark-mode'); 
	
	/* Save user preference to localStorage */
	if (root.classList.contains('dark-mode')) {
		localStorage.setItem('theme', 'dark-mode');
	}
	else {
		localStorage.removeItem('theme');
	}
});