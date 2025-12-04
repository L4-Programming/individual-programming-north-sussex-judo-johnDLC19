/* Refer to the README.md for instructions on what you need to do in this project */

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
  if (isNaN(currentWeight)) {
    alert("Please enter your current weight");
    return;
  }
  if (currentWeight < 0) {
    alert("Weight must be above zero");
    return;
  }
  // beginner athletes cannot enter competitions
  if (trainingPlan === "beginner" && competitions !== 0) {
    alert("Beginner athletes cannot enter competitions");
    return;
  }
  // check competitions is above or equal to 0, private hours between 0 and 5
  if (competitions < 0) {
    alert("Number of competitions must be above zero");
    return;
  }

  if (privateHours < 0 || privateHours > 5) {
    alert("Private coaching hours must be between 0 and 5");
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
//      check num of hours for private coaching is a number between 1 and 5
// Generate weight category based on input
// Calculate the total cost
// Display the total cost to the user
