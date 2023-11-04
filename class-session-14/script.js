const left = document.querySelector(".left");
// Selects the element with class "left" and stores it in a constant variable called "left"

const right = document.querySelector(".right");
// Selects the element with class "right" and stores it in a constant variable called "right"

const container = document.querySelector(".container");
// Selects the element with class "container" and stores it in a constant variable called "container"

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
// Adds an event listener to the "left" element for the "mouseenter" event.
// When the mouse enters the "left" element,
// it adds the class "hover-left" to the "container" element

left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
// Adds an event listener to the "left" element for the "mouseleave" event.
// When the mouse leaves the "left" element,
// it removes the class "hover-left" from the "container" element

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
// Adds an event listener to the "right" element for the "mouseenter" event.
// When the mouse enters the "right" element,
// it adds the class "hover-right" to the "container" element

right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
// Adds an event listener to the "right" element for the "mouseleave" event.
// When the mouse leaves the "right" element,
// it removes the class "hover-right" from the "container" element
