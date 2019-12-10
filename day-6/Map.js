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

function getShortestRoute(orbitsTree, nodeIdA, nodeIdB) {
  const routeA = orbitsTree.getBranchRoute(nodeIdA).reverse()
  const routeB = orbitsTree.getBranchRoute(nodeIdB).reverse()

  let sameRoute = true
  while(sameRoute) {
    sameRoute = routeA[0] === routeB[0]
    if (sameRoute) {
      routeA.shift()
      routeB.shift()
    }
  }

  const shortestRoute = (routeA.length - 1) + (routeB.length - 1)

  return shortestRoute
}

module.exports = {
  countOrbits,
  createNewMap,
  getShortestRoute
}