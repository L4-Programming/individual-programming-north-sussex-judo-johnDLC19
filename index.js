/* Refer to the README.md for instructions on what you need to do in this project */

// Display form to the user
// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

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
    addError("athlete-name", "Please enter your name");
  }
  // check training plan is selected
  if (trainingPlan === "") {
    addError("training-plan", "Please select a training plan");
  }
  // check weight is provided
  if (isNaN(currentWeight)) {
    addError("current-weight", "Please enter your current weight");
  }
  if (currentWeight < 0) {
    addError("current-weight", "Weight must be above zero");
  }
  // beginner athletes cannot enter competitions
  if (trainingPlan === "beginner" && competitions !== 0) {
    addError("competitions", "Beginner athletes cannot enter competitions");
  }
  // check competitions is above or equal to 0, private hours between 0 and 5
  if (competitions < 0) {
    addError("competitions", "Number of competitions must be above zero");
  }

  if (privateHours < 0 || privateHours > 5) {
    addError("private-hours", "Private coaching hours must be between 0 and 5");
  }

  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }
    // Populate the error message div with an unordered list of error messages
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }

  console.log({ errors });
});

// Generate weight category based on input
// Calculate the total cost
// Display the total cost to the user
