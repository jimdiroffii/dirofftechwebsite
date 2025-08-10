# Diroff Technology Consulting Website Source Code

This is the home page for **Diroff Technology Consulting**. 

Completely built by hand without any frameworks. Specific focus was made on semantics, accessibility, architecture, maintainability, responsiveness and optimization.

Vite was used for the final production build process. This worked great for automatic code minimization, cache-busting, and image processing. However, the image processing proved complicated, and required a completely non-scalable javascript workaround to get working correctly. While the images look great, and the format fallback works, I needed to create an image manifest and loader in js so the Vite image plugin could find the images and process them. This issue is avoided entirely by using a proper framework such as Astro. 

The next iteration of the site should remove the `image-loader.js` and `image-manifest.js` dependencies before production deployment. These are only needed during development. 

The contact form is processed through AWS using the API Gateway, Lambda, and SES.

## Development and Building
- Install prereqs: `npm install`
- Run dev server: `npm run dev`
- Process build: `npm run build`
