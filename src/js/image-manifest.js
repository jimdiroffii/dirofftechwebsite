// This file acts as a manifest for all processed images.
// By using static import strings, we allow Vite's build process
// to find and process these images correctly.

// --- Hero Image Imports ---
import heroAvif from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=avif&as=srcset';
import heroWebp from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=webp&as=srcset';
import heroJpg from '/assets/images/dark_server_racks_blue_lights.png?w=360;768;1280;1920;2560&format=jpg&as=srcset';
import heroFallback from '/assets/images/dark_server_racks_blue_lights.png?w=1280&format=jpg';

// --- Service Placard Image Imports ---
import p1Avif from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p1Webp from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p1Jpg from '/assets/images/dark_server_rack_white_walls.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p1Fallback from '/assets/images/dark_server_rack_white_walls.png?w=375&format=jpg&aspect=16:9';

import p2Avif from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p2Webp from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p2Jpg from '/assets/images/cloud_dashboard_laptop_office.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p2Fallback from '/assets/images/cloud_dashboard_laptop_office.png?w=375&format=jpg&aspect=16:9';

import p3Avif from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p3Webp from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p3Jpg from '/assets/images/compliance_checklist_pci_cmmc.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p3Fallback from '/assets/images/compliance_checklist_pci_cmmc.png?w=375&format=jpg&aspect=16:9';

import p4Avif from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p4Webp from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p4Jpg from '/assets/images/airport_point_of_sale_pos.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p4Fallback from '/assets/images/airport_point_of_sale_pos.png?w=375&format=jpg&aspect=16:9';

import p5Avif from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p5Webp from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p5Jpg from '/assets/images/dark_red_desktop_hack_security.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p5Fallback from '/assets/images/dark_red_desktop_hack_security.png?w=375&format=jpg&aspect=16:9';

import p6Avif from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=avif&aspect=16:9&as=srcset';
import p6Webp from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=webp&aspect=16:9&as=srcset';
import p6Jpg from '/assets/images/bricked_computer_system_hardening.png?w=375;750&format=jpg&aspect=16:9&as=srcset';
import p6Fallback from '/assets/images/bricked_computer_system_hardening.png?w=375&format=jpg&aspect=16:9';

// Export a structured object that our loader can use
export const imageManifest = {
	'dark_server_racks_blue_lights': { avif: heroAvif, webp: heroWebp, jpg: heroJpg, fallback: heroFallback },
	'dark_server_rack_white_walls': { avif: p1Avif, webp: p1Webp, jpg: p1Jpg, fallback: p1Fallback },
	'cloud_dashboard_laptop_office': { avif: p2Avif, webp: p2Webp, jpg: p2Jpg, fallback: p2Fallback },
	'compliance_checklist_pci_cmmc': { avif: p3Avif, webp: p3Webp, jpg: p3Jpg, fallback: p3Fallback },
	'airport_point_of_sale_pos': { avif: p4Avif, webp: p4Webp, jpg: p4Jpg, fallback: p4Fallback },
	'dark_red_desktop_hack_security': { avif: p5Avif, webp: p5Webp, jpg: p5Jpg, fallback: p5Fallback },
	'bricked_computer_system_hardening': { avif: p6Avif, webp: p6Webp, jpg: p6Jpg, fallback: p6Fallback },
};