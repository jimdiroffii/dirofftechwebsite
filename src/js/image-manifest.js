/******************************************************************************
 * image-manifest.js for Diroff Technology Consulting
 *
 * This file acts as a manifest for all processed images.
 * By using static import strings, we allow Vite's build process to find and 
 * process these images correctly.
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

// --- Hero Image Imports ---
import heroAvif from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=avif&as=srcset';
import heroWebp from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=webp&as=srcset';
import herojpeg from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=jpeg&as=srcset';
import heroFallback from '/assets/images/dark_server_racks_blue_lights.png?w=1280&format=jpeg';

// --- Service Placard Image Imports ---
import p1Avif from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p1Webp from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p1jpeg from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p1Fallback from '/assets/images/dark_server_rack_white_walls.png?w=375&format=jpeg&aspect=16:9';

import p2Avif from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p2Webp from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p2jpeg from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p2Fallback from '/assets/images/cloud_dashboard_laptop_office.png?w=375&format=jpeg&aspect=16:9';

import p3Avif from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p3Webp from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p3jpeg from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p3Fallback from '/assets/images/compliance_checklist_pci_cmmc.png?w=375&format=jpeg&aspect=16:9';

import p4Avif from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p4Webp from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p4jpeg from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p4Fallback from '/assets/images/airport_point_of_sale_pos.png?w=375&format=jpeg&aspect=16:9';

import p5Avif from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p5Webp from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p5jpeg from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p5Fallback from '/assets/images/dark_red_desktop_hack_security.png?w=375&format=jpeg&aspect=16:9';

import p6Avif from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p6Webp from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p6jpeg from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=jpeg&aspect=16:9&as=srcset';
import p6Fallback from '/assets/images/bricked_computer_system_hardening.png?w=375&format=jpeg&aspect=16:9';

// Export a structured object that our loader can use
export const imageManifest = {
	'dark_server_racks_blue_lights': { avif: heroAvif, webp: heroWebp, jpeg: herojpeg, fallback: heroFallback },
	'dark_server_rack_white_walls': { avif: p1Avif, webp: p1Webp, jpeg: p1jpeg, fallback: p1Fallback },
	'cloud_dashboard_laptop_office': { avif: p2Avif, webp: p2Webp, jpeg: p2jpeg, fallback: p2Fallback },
	'compliance_checklist_pci_cmmc': { avif: p3Avif, webp: p3Webp, jpeg: p3jpeg, fallback: p3Fallback },
	'airport_point_of_sale_pos': { avif: p4Avif, webp: p4Webp, jpeg: p4jpeg, fallback: p4Fallback },
	'dark_red_desktop_hack_security': { avif: p5Avif, webp: p5Webp, jpeg: p5jpeg, fallback: p5Fallback },
	'bricked_computer_system_hardening': { avif: p6Avif, webp: p6Webp, jpeg: p6jpeg, fallback: p6Fallback },
};