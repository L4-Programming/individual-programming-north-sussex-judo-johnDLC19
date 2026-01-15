export function displayErrors(errors) {
  // Add error class to input elements with errors
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement && field !== "training-plan") {
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
}

export function validateForm({
  athleteName,
  trainingPlan,
  currentWeight,
  numOfCompetitions,
  privateHours,
}) {
  removeErrors();
  let errors = {};
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }
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
  if (currentWeight < 40) {
    addError("current-weight", "Weight must be above 40kg");
  }
  if (currentWeight > 300) {
    addError("current-weight", "Maximum weight is 300kg");
  }
  // beginner athletes cannot enter competitions
  if (trainingPlan === "beginner" && numOfCompetitions !== 0) {
    addError(
      "numOfCompetitions",
      "Beginner athletes cannot enter competitions"
    );
  }
  // check competitions is above or equal to 0, private hours between 0 and 5
  if (numOfCompetitions < 0) {
    addError("numOfCompetitions", "Number of competitions must be above zero");
  }
  if (numOfCompetitions > 5) {
    addError("numOfCompetitions", "Maximum number of competitions is 5");
  }

  if (privateHours < 0 || privateHours > 5) {
    addError("private-hours", "Private coaching hours must be between 0 and 5");
  }
  // Removes previous error messages and styles
  function removeErrors() {
    let errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((input) => {
      input.classList.remove("error-input");
    });

    let errorLabels = document.querySelectorAll(".error-label");
    errorLabels.forEach((label) => {
      label.classList.remove("error-label");
    });

    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((div) => {
      div.classList.remove("error-message");
      div.innerHTML = "";
    });
  }
  // Return early if there are any errors
  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
    return false;
  }

  return {
    athleteName,
    trainingPlan,
    currentWeight,
    numOfCompetitions,
    privateHours,
  };
}
