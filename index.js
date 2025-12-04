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
  let trainingPlan = form.elements["training-plan"].value;
  // Store athletes name
  let currentWeight = document.querySelector("#current-weight").value;
  // Store athletes name
  let competitions = document.querySelector("#competitions").value;
  // Store athletes name
  let privateHours = document.querySelector("#private-hours").value;

  // Validate the user's input
  // check users name is entered
  if (athleteName === "") {
    alert("Please enter your name");
    return;
  }
  // check training plan is selected
  if (trainingPlan === "") {
    alert("Please select a training plan");
    return;
  }
  // check weight is provided
  if (currentWeight === "") {
    alert("Please enter your current weight");
    return;
  }

  console.log({
    athleteName,
    trainingPlan,
    currentWeight,
    competitions,
    privateHours,
  });
});

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
