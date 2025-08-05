import { defineConfig } from 'vite';

export default defineConfig({
	// Project Source Files
  root: 'src',

	// Production Build Output Directory
  build: {
    outDir: '../dist',
    emptyOutDir: true // Clears the dist directory before building
  }
});