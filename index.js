import { validateForm } from "./validateForm.js";
import { calculateCosts } from "./calculateCosts.js";
// Display form to the user
// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store athletes name
  let athleteName = document.querySelector("#athlete-name").value;
  // Store training plan
  let trainingPlan = form.elements["training-plan"].value;
  // Store weight
  let currentWeight = parseInt(document.querySelector("#current-weight").value);
  // Store competitions
  let competitions =
    parseInt(document.querySelector("#competitions").value) || 0;
  // Store private coaching hours
  let privateHours =
    parseInt(document.querySelector("#private-hours").value) || 0;

const result = validateForm({athleteName, trainingPlan, currentWeight, competitions, privateHours});

  console.log({ result });
  if (result) {
    calculateCosts(result);
  }
});

// Generate weight category based on input
// Calculate the total cost
// Display the total cost to the user
