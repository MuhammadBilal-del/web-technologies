# Web Technologies

Coursework for **Web Application Development (CSSE3143)**, Fall 2026.

| | |
|---|---|
| Student | Muhammad Bilal |
| Roll number | L1F22BSCS1040 |
| Program | BSCS |
| University | University of Central Punjab |
| Faculty | Faculty of Information Technology |
| Instructor | M. Umar Hameed |

The pages are short, working examples in the style of the [W3Schools](https://www.w3schools.com/) chapters used in class. Each file is plain HTML, CSS, and JavaScript. There is no build step and no package install.

Open [index.html](index.html) for the same list with links that work on GitHub Pages.

## Table of contents

### [01 · HTML5](01-html5/)

Structure, text, lists, links, images, tables, forms, semantic tags, and media.

- [What the web is, and a first HTML page](01-html5/01-web-and-html.html)
- [Elements, attributes, and block vs inline](01-html5/02-elements-and-attributes.html)
- [Headings, paragraphs, and text](01-html5/03-text.html)
- [Lists](01-html5/04-lists.html)
- [Links](01-html5/05-links.html)
- [Images](01-html5/06-images.html)
- [Tables](01-html5/07-tables.html)
- [Forms and validation attributes](01-html5/08-forms.html)
- [Semantic layout](01-html5/09-semantic.html)
- [Audio and video](01-html5/10-audio-video.html)

### [02 · CSS3](02-css3/)

Syntax, selectors, text, the box model, layout, flexbox, and effects.

- [Three ways to add CSS](02-css3/01-ways-to-add-css.html)
- [Selectors](02-css3/02-selectors.html)
- [Colors, text, and fonts](02-css3/03-text-and-fonts.html)
- [The box model](02-css3/04-box-model.html)
- [Backgrounds, links, lists, tables, and a navbar](02-css3/05-backgrounds-links-lists.html)
- [Display, position, float, and overflow](02-css3/06-layout.html)
- [Flexbox](02-css3/07-flexbox.html)
- [Radius, shadow, gradient, transform, transition, animation](02-css3/08-advanced.html)

### [03 · Bootstrap 5](03-bootstrap/)

Containers, the 12-column grid, typography, buttons, tables, forms, navbar, cards, carousel, and a small template. Bootstrap is loaded from the jsDelivr CDN.

- [Containers](03-bootstrap/01-containers.html)
- [Grid system](03-bootstrap/02-grid.html)
- [Typography, colors, and spacing](03-bootstrap/03-typography-and-colors.html)
- [Buttons and alerts](03-bootstrap/04-buttons-and-alerts.html)
- [Tables](03-bootstrap/05-tables.html)
- [Forms](03-bootstrap/06-forms.html)
- [Navbar](03-bootstrap/07-navbar.html)
- [Cards](03-bootstrap/08-cards.html)
- [Carousel](03-bootstrap/09-carousel.html)
- [A small page template](03-bootstrap/10-template.html)

### [04 · JavaScript](04-javascript/)

Output, variables, decisions, loops, functions, arrays, objects, ES6, the DOM, events, form checks, JSON, promises, fetch, and modules.

- [Where to put JavaScript, and output](04-javascript/01-output.html)
- [Variables, data types, and operators](04-javascript/02-variables-and-operators.html)
- [if, else, switch, and loops](04-javascript/03-conditions-and-loops.html)
- [Functions and arrow functions](04-javascript/04-functions.html)
- [Arrays and objects](04-javascript/05-arrays-and-objects.html)
- [ES6: destructuring, spread, rest, Map, Set, class](04-javascript/06-es6.html)
- [The DOM](04-javascript/07-dom.html)
- [Events](04-javascript/08-events.html)
- [Form validation](04-javascript/09-form-validation.html)
- [JSON, promises, async/await, and fetch](04-javascript/10-json-promises-fetch.html)
- [Modules](04-javascript/11-modules.html)

### [05 · Change the page with JavaScript](05-change-page-with-javascript/)

The marked exercise: change the heading, color the box, hide and show it with `classList.toggle`, and add 1 to a counter.

- [Exercise page](05-change-page-with-javascript/index.html)

## Run it locally

Open `index.html` in a browser. Two examples need a small local server, because browsers block JavaScript modules and `fetch` on `file://` pages:

```bash
python3 -m http.server 43123
```

Then open `http://127.0.0.1:43123`.

## GitHub Pages

Publish the branch from the repository root (`/`). Links are relative, so the site works at `https://<user>.github.io/<repo>/` as well as at the domain root. Bootstrap CSS and JavaScript come from the CDN and are not stored in this repository.

Audio and video examples use the sample files from the W3Schools HTML media chapter. They need a network connection. Every other page, including the images, works from the files in this repository.
