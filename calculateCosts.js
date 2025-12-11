export function calculateCosts(data) {
  console.log("Calculating costs...");
  console.log({ data });
  const { athleteName, trainingPlan, competitions, privateHours } = data;

  const prices = {
    beginner: 25,
    intermediate: 30,
    elite: 35,
    competitions: 22,
    privateHours: 9.5,
  };

  const PRIVATE_HOUR_RATE = 9.5;
  const COMPETITION_RATE = 22;
  const TRAINING_WEEKS = 4;

  let trainingCost = prices[trainingPlan];
  let privateCost = privateHours * PRIVATE_HOUR_RATE;
  let competitionCost = competitions * COMPETITION_RATE;

  const totalCost =
    trainingCost * TRAINING_WEEKS +
    competitions * competitionCost +
    privateHours * privateCost;

  const output = {
    totalCost: totalCost.toFixed(2),
    name: athleteName,
    trainingPlan: data.trainingPlan,
    trainingCost: trainingCost.toFixed(2),
    competitions,
    competitionCost: competitionCost.toFixed(2),
    privateHours,
    privateCost: privateCost.toFixed(2),
  };

  return output;
}
