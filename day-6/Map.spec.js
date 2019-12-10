const Map = require('./Map')
const Tree = require('./Tree')

const expect = require('chai').expect

describe('Creates trees', () => {
  const leaf = new Tree.Node('HHH', 'III', [])
  let array = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']

  it('should create new Node', () => {
    expect(new Tree.Node('HHH', 'III', [])).to.be.a('object')
  }),
  it('should create Tree and calculate total branch depth', () => {
    const nodes = new Map.createNewMap(array)

    expect(nodes).to.be.a('array')

    const tree = new Tree.Tree(nodes)

    expect(tree).to.be.a('object')
    expect(tree.getBranchDepth('D')).to.be.equal(3)
    expect(tree.getTotalTreeBranchDepth()).to.be.equal(42)

  }),
  it('should calculate shortest route', () => {
    array.push('K)YOU')
    array.push('I)SAN')

    const nodes = new Map.createNewMap(array)
    const tree = new Tree.Tree(nodes)

    expect(Map.getShortestRoute(tree, 'YOU','SAN')).to.equal(4)
  })
})