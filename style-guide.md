# Time Tracking Dashboard Style-Guide

The introduction section with drop-down navigation should be responsive across all devices.

- Mobile - 320px
- Tablet - 768px
- Desktop - 1440px

## Colors

```css
--navy-950: hsl(226, 43%, 10%);
--navy-900: hsl(235, 46%, 20%);
--purple-500: hsl(235, 45%, 61%);
--navy-200: hsl(236, 100%, 87%);
--purple-600: hsl(246, 80%, 60%);
--orange-300: hsl(15, 100%, 70%);
--blue-300: hsl(195, 74%, 62%);
--pink-400: hsl(348, 100%, 68%);
--green-400: hsl(145, 50%, 55%);
--purple-700: hsl(264, 64%, 52%);
--yellow-300: hsl(43, 84%, 65%);
```

## Size

```css
  --space-11: clamp(0.1875rem, 0.1875rem + 0vw, 0.1875rem);
  --space-12: clamp(0.375rem, 0.3571rem + 0.0893vw, 0.4375rem);
  --space-13: clamp(0.5625rem, 0.5446rem + 0.0893vw, 0.625rem);
  --space-14: clamp(0.75rem, 0.7143rem + 0.1786vw, 0.875rem);
  --space-15: clamp(1.125rem, 1.0893rem + 0.1786vw, 1.25rem);
  --space-16: clamp(1.5rem, 1.4464rem + 0.2679vw, 1.6875rem);
  --space-17: clamp(2.25rem, 2.1607rem + 0.4464vw, 2.5625rem);
  --space-18: clamp(3rem, 2.8929rem + 0.5357vw, 3.375rem);
  --space-19: clamp(4.5rem, 4.3393rem + 0.8036vw, 5.0625rem);
  --space-11-12: clamp(0.1875rem, 0.1161rem + 0.3571vw, 0.4375rem);
  --space-12-13: clamp(0.375rem, 0.3036rem + 0.3571vw, 0.625rem);
  --space-13-14: clamp(0.5625rem, 0.4732rem + 0.4464vw, 0.875rem);
  --space-14-15: clamp(0.75rem, 0.6071rem + 0.7143vw, 1.25rem);
  --space-15-16: clamp(1.125rem, 0.9643rem + 0.8036vw, 1.6875rem);
  --space-16-17: clamp(1.5rem, 1.1964rem + 1.5179vw, 2.5625rem);
  --space-17-18: clamp(2.25rem, 1.9286rem + 1.6071vw, 3.375rem);
  --space-18-19: clamp(3rem, 2.4107rem + 2.9464vw, 5.0625rem);
  --space-14-16: clamp(0.75rem, 0.4821rem + 1.3393vw, 1.6875rem);
  --space-15-17: clamp(1.125rem, 0.7143rem + 2.0536vw, 2.5625rem);
  --space-16-18: clamp(1.5rem, 0.9643rem + 2.6786vw, 3.375rem);
  --space-17-19: clamp(2.25rem, 1.4464rem + 4.0179vw, 5.0625rem);

```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-7: 6px;
--radius-8: 8px;
--radius-9: 10px;
--radius-10: 12px; 
--radius-11: 15px;
--radius-12: 20px;
--radius-13: 24px;
--radius-14: 26px;
--radius-15: 28px;
--radius-16: 30px;
--radius-17: 34px;
--radius-18: 36px;
--radius-19: 38px;
--radius-20: 40px;
```

## Favicon Links

```html
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
```

```css

/* <weight>: Use a value from 300 to 900 */
/* <uniquifier>: Use a unique and descriptive class name */

--ff-rubik-sans-serif: var(--ff-rubik), sans-serif;
--ff-rubik: 'Rubik';
--font-style: normal;
--font-size-fluid-0: clamp(0.75rem, 0.7232rem + 0.1339vw, 0.8438rem);
--font-size-fluid-1: clamp(0.9375rem, 0.884rem + 0.2675vw, 1.1247rem);
--font-size-fluid-2: clamp(1.1719rem, 1.0783rem + 0.4677vw, 1.4993rem);
--font-size-fluid-3: clamp(1.4648rem, 1.3124rem + 0.7624vw, 1.9985rem);
--font-size-fluid-4: clamp(1.8311rem, 1.5931rem + 1.1899vw, 2.664rem);
--font-size-fluid-5: clamp(2.2888rem, 1.9282rem + 1.8033vw, 3.5511rem);

.rubik-<uniquifier> {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

## Resets

```css
* {
	margin: 0; 
	padding: 0; 
}

*, *::before, *::after {
	box-sizing: border-box;
}

html {
	overflow: hidden;
	/* The style below prevents font-style inflation */
	text-size-adjust: none;
	-moz-text-size-adjust: none;
	-webkit-text-size-adjust: none;
 }
 
/* Set core root defaults */
html:focus-within { 
	scroll-behavior: smooth; 
}

/* Avoid text overflow */
p, h1, h2, h3, h4, h5, h6 {
	 overflow-wrap: break-word;
}
 
/* Balance text wrappings on the heading */
h1, h2, h3, h4, h5, h6 {
	text-wrap: balance; 
}

/* Improve line wrapping */
p {
	text-wrap: pretty; 
}
 
 h1, h2, h3, h4, button, input, label {
	 line-height: 1.1;
 }
 
 /* Improve media defaults */
 img,picture, video, canvas, svg {
  max-width: 100%;
  height: auto;
  display: var(--block);
}

body {
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	overflow: hidden;
	/* Using a font-size of 18px */
	font-size: 1.125rem;
	}

/* All buttons should have this style */
button {
  appearance: none;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

/* Inherits fonts for input and buttons */
input, button, textarea, select { 
	font: inherit; 
}

/* Remove the text-decoration style for all anchor elements */
a {
  text-decoration: none;
  color: inherit;
}

/* Remove the mark of the list items */
li {
  list-style-type: none;
  color: inherit; 
}

/* We make sure that the text areas without rows are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* All anchor and button elements have an outline of none when focused */
a:focus,
button:focus {
  outline: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Anything that has been anchored to should have an extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```