const Tree = require('./Tree')

function createNewMap(array) {
  return array.map(orbit => {
    const orbitIDs = orbit.split(')')
    return new Tree.Node(orbitIDs[1], orbitIDs[0])
  })
}

function countOrbits(orbitsTree) {
  return orbitsTree.getTotalTreeBranchDepth()
}

module.exports = {
  countOrbits,
  createNewMap
}