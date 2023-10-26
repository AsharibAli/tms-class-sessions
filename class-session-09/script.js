const progress = document.getElementById("progress");
// Get the element with the id "progress" and assign it to the 'progress' variable

const prev = document.getElementById("prev");
// Get the element with the id "prev" and assign it to the 'prev' variable

const next = document.getElementById("next");
// Get the element with the id "next" and assign it to the 'next' variable

const circles = document.querySelectorAll(".circle");
// Get all elements with the class "circle" and assign them to the 'circles' variable

let currentActive = 1;
// Initialize a variable 'currentActive' with a value of 1 to keep track of the current active circle

next.addEventListener("click", () => {
  currentActive++;
  // Increment the 'currentActive' variable by 1 when the "next" button is clicked

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // Make sure that 'currentActive' does not exceed the length of the 'circles' array

  update();
  // Call the 'update' function to update the UI based on the new 'currentActive' value
});

prev.addEventListener("click", () => {
  currentActive--;
  // Decrement the 'currentActive' variable by 1 when the "prev" button is clicked

  if (currentActive < 1) {
    currentActive = 1;
  }
  // Make sure that 'currentActive' does not go below 1

  update();
  // Call the 'update' function to update the UI based on the new 'currentActive' value
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  // Loop through each element in the 'circles' array
  // Add the "active" class to circles with an index less than 'currentActive'
  // Remove the "active" class from circles with an index greater than or equal to 'currentActive'

  const actives = document.querySelectorAll(".active");
  // Get all elements with the class "active" and assign them to the 'actives' variable

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // Calculate the width of the progress bar based on the number of active circles
  // Set the calculated width as the style property value for the 'progress' element

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  // Disable the "prev" button when 'currentActive' is 1
  // Disable the "next" button when 'currentActive' is equal to the length of the 'circles' array
  // Enable both buttons in any other case
}
