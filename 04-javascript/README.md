# 04 · JavaScript

Weeks 6 and 7. JavaScript adds behaviour. In the browser it can change HTML, change CSS, hide and show elements, and ask a server for data.

Put a script at the bottom of the body, or in its own file and point a `script` tag at it. The pages here keep the script in the file so you can read the markup and the code together. The modules page is the exception: the functions live in `greet.js`.

| Page | What it shows |
|---|---|
| [01-output.html](01-output.html) | `innerHTML`, `alert`, `console.log`, `document.write` |
| [02-variables-and-operators.html](02-variables-and-operators.html) | `let`, `const`, types, arithmetic, `===`, logic |
| [03-conditions-and-loops.html](03-conditions-and-loops.html) | `if`, `else`, `switch`, `for`, `while` |
| [04-functions.html](04-functions.html) | Declaration, parameters, return, arrow functions |
| [05-arrays-and-objects.html](05-arrays-and-objects.html) | Arrays, objects, `map`, `filter`, `reduce` |
| [06-es6.html](06-es6.html) | Destructuring, spread, rest, default parameters, `Map`, `Set`, `class` |
| [07-dom.html](07-dom.html) | Finding elements, changing text, attributes, and style |
| [08-events.html](08-events.html) | Click, mouse, and keyboard events |
| [09-form-validation.html](09-form-validation.html) | Check a form before it is accepted |
| [10-json-promises-fetch.html](10-json-promises-fetch.html) | JSON, promises, `async`/`await`, `fetch` |
| [11-modules.html](11-modules.html) | `export` and `import` |

`11-modules.html` and the `fetch` button need a local server or GitHub Pages. Browsers block both on a `file://` address. From the repository root:

```bash
python3 -m http.server 43123
```

Reference used in class: [W3Schools JavaScript](https://www.w3schools.com/js/).
