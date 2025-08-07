document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".hamburger");
	const nav = document.querySelector(".header-nav");
	const navLinks = document.querySelectorAll(".header-nav a");

	if (!burger || !nav || !navLinks) return;

	const closeMenu = () => {
		burger.classList.remove("active");
		nav.classList.remove("open");
		burger.setAttribute("aria-expanded", "false");
	};

	/* If the user clicks the hamburger, open the menu */
	burger.addEventListener("click", () => {
		const isOpen = burger.classList.toggle("active");
		nav.classList.toggle("open", isOpen);
		burger.setAttribute("aria-expanded", isOpen);
	});

	/* If the user presses escape, close the menu */
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeMenu();
		}
	});

	/* If the user clicks outside the menu, close the menu */
	document.addEventListener("click", (e) => {
		if (nav.contains(e.target) || burger.contains(e.target)) {
			return;
		}
		closeMenu();
	});

	/* If the user clicks a link, close the menu */
	navLinks.forEach(link => {
		link.addEventListener("click", () => {
			closeMenu();
		});

		/* Add the ability to "click" the link with the spacebar during keyboard navigation */
		link.addEventListener("keydown", (e) => {
			if (e.key === " ") {
				e.preventDefault(); // Prevent scrolling (normal spacebar behavior)
				link.click();
			}
		});
	});
});