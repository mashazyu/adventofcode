const Map = require('./Map')
const Tree = require('./Tree')

const expect = require('chai').expect

describe('Creates trees', () => {
  it('should create new Node', () => {
    const leaf = new Tree.Node('HHH', 'III', [])
    expect(new Tree.Node('HHH', 'III', [])).to.be.a('object')
  }),
  it('should create Tree and calculate sum of all branch depths', () => {
    const array = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']
    const nodes = new Map.createNewMap(array)

    expect(nodes).to.be.a('array')

    const tree = new Tree.Tree(nodes)

    expect(tree).to.be.a('object')
    expect(tree.getBranchDepth('D')).to.be.equal(3)
    expect(tree.getTotalTreeBranchDepth()).to.be.equal(42)
  })
}),
describe('Counts orbits', () => {
  it('should count orbits correctly', () => {
    expect(Map.countOrbits).to.be.a('function')
    //expect(Password.shouldMeetCriteria('999999', min, max)).to.equal(false)
  })
})