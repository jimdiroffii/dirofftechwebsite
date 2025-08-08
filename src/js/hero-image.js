/******************************************************************************
 * hero-image.js for Diroff Technology Consulting
 * 
 * This js file was necessary for the Vite build process. Due to the way the 
 * Vite image plugin works, the HTML code was grabbing the original source
 * image before the build could process the image. By incorporating this js
 * file, the js is processed before the images are placed into the HTML, and 
 * therefore will be resized, converted, and renamed as part of the build.
 * 
 * Preferably, this file would be removed and the HTML code used in its place.
 * 
 * HTML:
 * 
 *	<picture class="hero-image">
 *		<source
 *			srcset="/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=avif"
 *			type="image/avif"
 *			sizes="100vw"
 *		/>
 *		<source
 *			srcset="/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=webp"
 *			type="image/webp"
 *			sizes="100vw"
 *		/>
 *		<img
 *			src="/assets/images/dark_server_racks_blue_lights.png?w=1280&format=jpg"
 *			srcset="/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=jpg"
 *			sizes="100vw" alt="A dark datacenter with server racks showing blue lights"
 *			loading="eager"
 *			width="1536"
 *			height="1024"
 *		/>
 *	</picture>
 *
 *****************************************************************************/

import avifSrcset from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=avif&as=srcset';
import webpSrcset from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=webp&as=srcset';
import jpgSrcset from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=jpg&as=srcset';
import fallbackJpg from '/assets/images/dark_server_racks_blue_lights.png?w=1280&format=jpg';

const avifSource = document.getElementById('hero-avif');
const webpSource = document.getElementById('hero-webp');
const jpgImg = document.getElementById('hero-jpg');

avifSource.srcset = avifSrcset;
webpSource.srcset = webpSrcset;
jpgImg.srcset = jpgSrcset;
jpgImg.src = fallbackJpg;