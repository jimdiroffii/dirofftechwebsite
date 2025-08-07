document.addEventListener("DOMContentLoaded", () => {
	const headerBrand = document.querySelector('.header-brand');
	const headerBalance = document.querySelector('.header-balance');

	// This function calculates and sets the width
	const balanceHeader = () => {
		if (headerBrand && headerBalance) {
			const brandWidth = headerBrand.offsetWidth;
			headerBalance.style.width = `${brandWidth}px`;
		}
	};

	// Run the function when the page loads
	balanceHeader();

	// Rerun the function if the window is resized
	window.addEventListener('resize', balanceHeader);
});