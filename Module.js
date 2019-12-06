function calculateFuel (mass) {
  return Math.floor(mass / 3) - 2
}

const calculateTotalFuel = (mass, acc=0) => {
  const fuelRequirement = Math.floor(mass / 3) - 2
  if (fuelRequirement > 0) {
    const newAcc = acc+fuelRequirement
    return calculateTotalFuel(fuelRequirement, newAcc)
  } else {
      return acc
  }
}

module.exports = {
  calculateFuel,
  calculateTotalFuel
}