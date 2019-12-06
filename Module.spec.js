const Module = require('./Module')
const expect = require('chai').expect

describe('Module', () => {
  describe('"calculateFuel"', () => {
    it('should export calculateFuel function', () => {
      expect(Module.calculateFuel).to.be.a('function')
    })
    it('should calculate the fuel for module correctly', () => {
      expect(Module.calculateFuel(12)).to.equal(2)
      expect(Module.calculateFuel(14)).to.equal(2)
      expect(Module.calculateFuel(1969)).to.equal(654)
      expect(Module.calculateFuel(100756)).to.equal(33583)
    })
  }),
  describe('"calculateTotalFuel"', () => {
    it('should export calculateTotalFuel function', () => {
      expect(Module.calculateTotalFuel).to.be.a('function')
    })
    it('should calculate the total fuel correctly', () => {
      expect(Module.calculateTotalFuel(14)).to.equal(2)
      expect(Module.calculateTotalFuel(1969)).to.equal(966)
      expect(Module.calculateTotalFuel(100756)).to.equal(50346)
    })
  })
})