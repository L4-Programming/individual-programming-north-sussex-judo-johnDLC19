export function calculateCosts(data) {
  const { athleteName, trainingPlan, numOfCompetitions, privateHours } = data;

  const trainingPrices = {
    beginner: 25,
    intermediate: 30,
    elite: 35,
  };

  const PRIVATE_HOUR_RATE = 9.5;
  const COMPETITION_RATE = 22;
  const TRAINING_WEEKS = 4;

  let trainingCost = trainingPrices[trainingPlan];
  let privateCost = privateHours * PRIVATE_HOUR_RATE;
  let competitionCost = numOfCompetitions * COMPETITION_RATE;

  const totalCost =
    trainingCost * TRAINING_WEEKS +
    numOfCompetitions * competitionCost +
    privateHours * privateCost;

  const output = {
    totalCost: totalCost.toFixed(2),
    name: athleteName,
    trainingPlan: data.trainingPlan,
    trainingCost: trainingCost.toFixed(2),
    numOfCompetitions,
    competitionCost: competitionCost.toFixed(2),
    privateHours,
    privateCost: privateCost.toFixed(2),
  };

  return output;
}
