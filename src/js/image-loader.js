/******************************************************************************
 * image-loader.js for Diroff Technology Consulting
 *
 * This module handles the dynamic loading of images processed by Vite.
 *****************************************************************************/

import { imageManifest } from './image-manifest.js';

function loadImage(imageName) {
	// Look up the processed image paths from our manifest
	const images = imageManifest[imageName];
	if (!images) return; // Exit if the image name isn't in our manifest

	const sizes = imageName === 'dark_server_racks_blue_lights' 
		? '100vw' 
		: '(min-width: 1200px) 375px, (min-width: 768px) 50vw, 100vw';

	// Select the DOM elements
	const avifSource = document.getElementById(`${imageName}-avif`);
	const webpSource = document.getElementById(`${imageName}-webp`);
	const jpgImg = document.getElementById(`${imageName}-jpg`);

	// Set the attributes
	if (avifSource && webpSource && jpgImg) {
		avifSource.srcset = images.avif;
		avifSource.sizes = sizes;
		webpSource.srcset = images.webp;
		webpSource.sizes = sizes;
		jpgImg.srcset = images.jpg;
		jpgImg.sizes = sizes;
		jpgImg.src = images.fallback;
		jpgImg.classList.add('loaded');
	}
}

// Load all necessary images when the document is ready
document.addEventListener('DOMContentLoaded', () => {
	for (const imageName in imageManifest) {
		loadImage(imageName);
	}
});