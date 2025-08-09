/******************************************************************************
 * image-loader.js for Diroff Technology Consulting
 *
 * This module handles the dynamic loading of images processed by Vite.
 * 
 * The issue isn't with Vite itself, but rather a mismatch between what we're 
 * asking it to do and how it's designed to work with plain HTML.
 *
 * Vite's Power: Vite's asset handling and plugins (like vite-imagetools) are 
 * designed to work on modules within a dependency graph. When you use import 
 * in a JavaScript file, that file becomes part of a graph. Vite traverses this 
 * graph during the build, transforming assets as it goes.
 *
 * The Static HTML Limitation: A plain index.html file is the entry point, but 
 * it's not truly part of the module graph in the same way a JS file is. Vite 
 * reads the HTML and finds links to assets (like <script src="...">), but it 
 * doesn't deeply parse the HTML to transform srcset attributes with special 
 * query parameters.
 * 
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
	const jpegImg = document.getElementById(`${imageName}-jpeg`);

	// Set the attributes
	if (avifSource && webpSource && jpegImg) {
		avifSource.srcset = images.avif;
		avifSource.sizes = sizes;
		webpSource.srcset = images.webp;
		webpSource.sizes = sizes;
		jpegImg.srcset = images.jpeg;
		jpegImg.sizes = sizes;
		jpegImg.src = images.fallback;
		jpegImg.classList.add('loaded');
	}
}

// Load all necessary images when the document is ready
document.addEventListener('DOMContentLoaded', () => {
	for (const imageName in imageManifest) {
		loadImage(imageName);
	}
});