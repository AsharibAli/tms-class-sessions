const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Get the element with the ID "open" and store it in the variable "open"
// This element represents a button or link that will open the navigation

// Get the element with the ID "close" and store it in the variable "close"
// This element represents a button or link that will close the navigation

// Get the first element that matches the CSS selector ".container" and store it in the variable "container"
// This element represents the container which contains the navigation

open.addEventListener("click", () => container.classList.add("show-nav"));

// Add an event listener to the "open" element, listening for a click event
// When the element is clicked, add the CSS class "show-nav" to the "container" element
// This will display the navigation

close.addEventListener("click", () => container.classList.remove("show-nav"));

// Add an event listener to the "close" element, listening for a click event
// When the element is clicked, remove the CSS class "show-nav" from the "container" element
// This will hide the navigation
