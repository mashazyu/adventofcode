const Program = require('./Program')
const expect = require('chai').expect

describe('Program', () => {
  describe('run', () => {
    it('should run entered code', () => {
      expect(Program.run).to.be.a('function')
    })
    it('should return correct program result', () => {
      expect(Program.run([1,0,0,0,99])).to.deep.equal([2,0,0,0,99])
      expect(Program.run([2,3,0,3,99])).to.deep.equal([2,3,0,6,99])
      expect(Program.run([2,4,4,5,99,0])).to.deep.equal([2,4,4,5,99,9801])
      expect(Program.run([1,1,1,4,99,5,6,0,99])).to.deep.equal([30,1,1,4,2,5,6,0,99])
    })
  })
})