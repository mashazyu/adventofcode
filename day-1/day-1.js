const fs = require('fs')
const Module = require('./Module')


require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};


const puzzleInput = require("./day-1-puzzle-input.txt");

const masses = puzzleInput.split('\n')

const fuelAmmountForModule = masses.reduce(
  (sum, mass) => sum + Module.calculateFuel(mass),
  0
)

console.log('//// fuelAmmountForModule: ', fuelAmmountForModule)

const totalFuelAmmount = masses.reduce(
  (sum, mass) => sum + Module.calculateTotalFuel(mass),
  0
)

console.log('//// totalFuelAmmount: ', totalFuelAmmount)

