/* Refer to the README.md for instructions on what you need to do in this project */

// Display form to the user
// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function () {
    event.preventDefault();
  console.log("Form submitted");

// Store athletes name
let athleteName = document.querySelector("#athlete-name").value;
// Store athletes name
let trainingPlan = document.querySelector("#training-plan").value;
// Store athletes name
let currentWeight = document.querySelector("#current-weight").value;
// Store athletes name
let competitions = document.querySelector("#competitions").value;
// Store athletes name
let privateHours = document.querySelector("#private-hours").value;
console.log({athleteName, trainingPlan, currentWeight, competitions, privateHours});
});

// Validate the user's input
//      check users name is entered7
//      check training plan is selected
//      check weight is provided
//      check weight is a number
//      check num of competitions is provided
//      check num of competitions is a number
//      check num of hours for private coaching is provided
//      check num of hours for private coaching is a number between 1 and 5
// Generate weight category based on input
// Calculate the total cost
// Display the total cost to the user