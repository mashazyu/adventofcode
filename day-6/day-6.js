const Map = require('./Map')
const Tree = require('./Tree')

const fs = require('fs')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
}

const orbitArray = require("./input.txt").split('\n')

const orbitMap = Map.createNewMap(orbitArray)

const orbitTree = new Tree.Tree(orbitMap)
const totalAmountOfOrbits = Map.countOrbits(orbitTree)
console.log('/// total amount of oribits is:  ', totalAmountOfOrbits)