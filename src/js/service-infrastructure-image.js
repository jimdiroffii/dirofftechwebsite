/******************************************************************************
 * service-infrastructure-image.js for Diroff Technology Consulting
 * 
 * This js file was necessary for the Vite build process. Due to the way the 
 * Vite image plugin works, the HTML code was grabbing the original source
 * image before the build could process the image. By incorporating this js
 * file, the js is processed before the images are placed into the HTML, and 
 * therefore will be resized, converted, and renamed as part of the build.
 * 
 * Preferably, this file would be removed and the HTML code used in its place.
 * 
 * See hero-image.js for HTML code this js is replacing.
 *
 *****************************************************************************/

// Import image sources for the first service placard
import avifSrcset from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import webpSrcset from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import jpgSrcset from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import fallbackJpg from '/assets/images/dark_server_rack_white_walls.png?w=375&format=jpg&aspect=16:9';

// Define the sizes attribute for this image type
const sizes = '(min-width: 1200px) 375px, (min-width: 768px) 50vw, 100vw';

// Select the elements from the DOM
const avifSource = document.getElementById('dark_server_rack_white_walls-avif');
const webpSource = document.getElementById('dark_server_rack_white_walls-webp');
const jpgImg = document.getElementById('dark_server_rack_white_walls-jpg');

// Set the attributes with the processed image paths
if(avifSource && webpSource && jpgImg) {
    avifSource.srcset = avifSrcset;
    avifSource.sizes = sizes;

    webpSource.srcset = webpSrcset;
    webpSource.sizes = sizes;
    
    jpgImg.srcset = jpgSrcset;
    jpgImg.sizes = sizes;
    jpgImg.src = fallbackJpg;
}