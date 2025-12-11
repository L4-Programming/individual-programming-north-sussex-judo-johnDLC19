export function displayResults(output, currentWeight) {
  //generate weight category
  let weightCategory = "";
  if (currentWeight > 100) {
    weightCategory = "Heavyweight";
  } else if (currentWeight <= 100 && currentWeight >= 91) {
    weightCategory = "Light-Heavyweight";
  } else if (currentWeight <= 90 && currentWeight >= 82) {
    weightCategory = "Middleweight";
  } else if (currentWeight <= 81 && currentWeight >= 74) {
    weightCategory = "Light-Middleweight";
  } else if (currentWeight <= 73 && currentWeight >= 67) {
    weightCategory = "Lightweight";
  } else if (currentWeight <= 66) {
    weightCategory = "Flyweight";
  }
  console.log(weightCategory);

  let results = document.querySelector("#results");
  results.innerHTML = `<h3>Your Name: ${output.name}</h3>
    <h3>Your Weight Category: ${weightCategory}</h3>
    <p>Your Selected Training Plan: ${output.trainingPlan}</p>
    <p>Training Cost (per week): £${output.trainingCost}</p>
    <p>Number of Competitions Entered This Month: ${output.competitions}</p>
    <p>Total Competition Cost: £${output.competitionCost}</p>
    <p>Private Coaching Hours: ${output.privateHours}</p>
    <p>Private Coaching Cost: £${output.privateCost}</p>
    <h2>Total Monthly Cost: £${output.totalCost}</h2>
  `;
}
