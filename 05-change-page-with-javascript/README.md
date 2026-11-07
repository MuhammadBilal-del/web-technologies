# 05 · Change the page with JavaScript

Marks: 10. Topics: selecting elements, click events, changing text and CSS.

The HTML and CSS are the ones given in the exercise. The script is in [script.js](script.js). Open [index.html](index.html).

| Button | What it does | Marks |
|---|---|---|
| Change Text | Sets the heading to `Welcome to JavaScript` | 2 |
| Change Color | Sets the box background to orange | 2 |
| Hide / Show Box | `classList.toggle("hidden")` on the box. The class is `display: none` | 3 |
| +1 | Adds 1 to the number in `#count` | 3 |

Each button is wired with `addEventListener("click", ...)`. The elements are found with `getElementById`, using the ids from the HTML: `heading`, `box`, `count`, `textBtn`, `colorBtn`, `hideBtn`, `plusBtn`.
