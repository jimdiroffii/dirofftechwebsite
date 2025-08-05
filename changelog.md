## Website Development Change Log
Outlines the incremental changes made to the static website to implement certain features. 

### Dark Mode Implementation
> Fixing the "Flash of Unstyled Content" (FOUC)
*Problem*: The initial dark mode script was loaded at the end of the <body>, causing a white screen to flash before the dark theme was applied.

#### Solution

An inline JavaScript snippet was added to the `<head>` in `index.html`. This script checks `localStorage` for the user's theme preference and applies the `.dark-mode` class to the `<html>` element before the page content renders, eliminating the flash.

The CSS in `style.css` was updated to handle the class being on the `<html>` tag. The primary dark mode style was changed from `.dark-mode` to `html.dark-mode` body to ensure it correctly overrode the default body styles.

The external `darkmode-1.0.js` file was cleaned up to only contain the event listener for the toggle button, as the initial theme setting was now handled by the inline script.

```html
<head>
    ...
    <script>
        (function () {
			try {
				const theme = localStorage.getItem('theme');
				if (theme === 'dark-mode') {
					document.documentElement.classList.add('dark-mode');
				}
			} catch (e) { }
		})();
    </script>
</head>
```

```css
html.dark-mode body {
	background-color: var(--clr-dark);
	color: var(--clr-light);
}
```

### Accessibility Enhancements
> Keyboard-Interactive Theme Toggle
*Problem*: The theme toggle was originally a `<div>`, which is not focusable or interactive via a keyboard.

#### Solution

In index.html, the `<div>` was converted to a `<button>` element to provide native keyboard focus and interaction.

An `aria-label="Toggle theme"` attribute was added to the `<button>` to give it an accessible name for screen readers.

CSS was added to `style.css` to reset the default browser styles for `<button>`, making it appear identical to the original `<div>`.

```html
<button class="toggle-container" id="themeToggle" aria-label="Toggle theme">
    ...
</button>
```

> Decorative Icon Labeling
*Problem*: Even with an `aria-label` on the button, some accessibility checkers flagged the `<svg>` icons inside it as unlabeled images.

#### Solution 
The `aria-hidden="true"` attribute was added to both `<svg>` elements. This marks them as decorative and hides them from the accessibility tree, informing screen readers that they don't need to be announced.

```html
<button ...>
    <svg ... aria-hidden="true"> ... </svg>
    <svg ... aria-hidden="true"> ... </svg>
</button>
```

> Image Link Labeling
*Problem*: The link to `humans.txt` in the footer contained an image with no alt text, making the link's purpose unclear to screen readers.

#### Solution
A descriptive alt attribute was added to the `<img>` tag. This provides a text alternative for the image that also serves as the accessible name for the link itself.

```html
<footer>
    <a href="humans.txt" ...>
        <img src="img/humanstxt-isolated-blank.gif" alt="View the Humans.txt file, which describes the people behind this website." />
    </a>
</footer>
```

### Header Layout Correction
> Centering the Navigation Menu
*Problem*: The central navigation menu was not perfectly centered on the page. Because the left (brand) and right (toggle) elements had different widths, flexbox solutions like `space-between` or `margin:` auto centered the navigation in the remaining space, not in the page's true center.

#### Solution
The layout strategy was changed to use absolute positioning for the side elements, allowing the central navigation to be centered perfectly.

HTML Structure: The `<header>` was refactored for better semantics and easier styling. The brand, navigation, and toggle were made direct children of the `<header>`.

CSS Positioning:

The `<header>` was given `position: relative` to act as a positioning container, along with `display: flex` and `justify-content: center`.

The left brand element `.header-brand` and the right toggle button `.toggle-container` were given `position: absolute` to remove them from the normal layout flow and pin them to the `left: 0` and `right: 0` edges of the header, respectively.

With the side elements removed from the flow, the `.header-nav` becomes the sole item for the flexbox `justify-content: center` to position, placing it in the exact center of the page.

```css
header {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 0;
}

.header-brand {
	position: absolute;
	left: 0;
}

.toggle-container {
	position: absolute;
	right: 0;
    /* ... other styles ... */
}
```