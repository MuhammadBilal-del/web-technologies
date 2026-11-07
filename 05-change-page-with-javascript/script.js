// Change the page with JavaScript
// Muhammad Bilal, L1F22BSCS1040

var heading = document.getElementById("heading");
var box = document.getElementById("box");
var countEl = document.getElementById("count");

// Change Text: the heading becomes "Welcome to JavaScript".
document.getElementById("textBtn").addEventListener("click", function () {
  heading.textContent = "Welcome to JavaScript";
});

// Change Color: the box background becomes orange.
document.getElementById("colorBtn").addEventListener("click", function () {
  box.style.backgroundColor = "orange";
});

// Hide / Show: toggle the hidden class. CSS sets .hidden { display: none }.
document.getElementById("hideBtn").addEventListener("click", function () {
  box.classList.toggle("hidden");
});

// +1: read the number, add 1, write it back.
document.getElementById("plusBtn").addEventListener("click", function () {
  countEl.textContent = Number(countEl.textContent) + 1;
});
