document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".hamburger");
	const nav = document.querySelector(".header-nav");
	const navLinks = document.querySelectorAll(".header-nav a");

	const closeMenu = () => {
		burger.classList.remove("active");
		nav.classList.remove("open");
		burger.setAttribute("aria-expanded", "false");
	};

	burger.addEventListener("click", () => {
		const isOpen = burger.classList.toggle("active");
		nav.classList.toggle("open", isOpen);
		burger.setAttribute("aria-expanded", isOpen);
	});

	navLinks.forEach(link => {
		link.addEventListener("click", () => {
			closeMenu();
		});
	});
});