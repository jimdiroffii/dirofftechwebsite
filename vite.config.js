import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	// Project Source Files
  root: 'src',
  publicDir: '../public',

	// Production Build Output Directory
  build: {
    outDir: '../dist',
    emptyOutDir: true // Clears the dist directory before building
  },
  plugins: [
    imagetools(),
    viteStaticCopy({
      targets: [
        {
          // Copy the license file for the Roboto font to production
          src: 'fonts/OFL.txt',
          dest: 'assets'
        }
      ]
    })
  ]
});