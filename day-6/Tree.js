class Node {
  constructor(id, parentId, children=[]) {
    this.id = id,
    this.parentId = parentId,
    this.children = children
  }
}

class Tree {
  constructor(nodes=[], rootId='COM') {
    this.nodes = nodes
    this.rootId = rootId

    if (this.nodes.length > 0) {
      this.linkNodes()
      this.leaves = this.findLeaves()
    }
  }

  findParent(nodeId) {
    return this.nodes.find(node => node.id === nodeId)
  }

  findLeaves() {
    let leaves = []

    this.nodes.forEach(node => {
      if (node.children.length === 0) {
        leaves.push(node)
      }
    })

    return leaves
  }

  linkNodes() {
    this.nodes.forEach(node => {
      const parentNode = this.findParent(node.parentId)

      if (parentNode) {
        parentNode.children.push(node.id)
      }
    })
  }

  getBranchDepth(leaf, depth=0) {
    const parent = this.nodes.find(node => {
      if (node.children.some(child => child === leaf)) {
        return node
      }
    })

    if (parent) {
      return this.getBranchDepth(parent.id, depth +1)
    } else {
      return depth +1
    }
  }

  getBranchRoute(leaf, route=[]) {
    const parent = this.nodes.find(node => {
      if (node.children.some(child => child === leaf)) {
        return node
      }
    })

    const newRoute = [...route]
    newRoute.push(leaf)

    if (parent) {
      return this.getBranchRoute(parent.id, newRoute)
    } else {
      return newRoute
    }
  }

  getTotalTreeBranchDepth() {
    let totalDepth = 0

    this.nodes.forEach(node => {
      if (node.id !== this.rootId) {
        totalDepth = totalDepth + this.getBranchDepth(node.id)
      }
    })

    return totalDepth
  }
}

module.exports = {
  Node,
  Tree
}