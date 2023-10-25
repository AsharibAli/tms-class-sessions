const panels = document.querySelectorAll(".panel");
// Selecting all elements with the class "panel" and storing them in the variable "panels"

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
// Adding a click event listener to each panel element:
// - When a panel is clicked, it calls the function removeActiveClasses() to remove the "active" class from all panels
// - Then, it adds the class "active" to the clicked panel

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// Defining a function called removeActiveClasses():
// - It iterates over each panel element using forEach()
// - For each panel, it removes the class "active"
