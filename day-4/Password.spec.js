const Password = require('./Password')
const expect = require('chai').expect

describe('Password', () => {
  it('does password meet criteria', () => {
    const min = 0
    const max = 999999

    expect(Password.shouldMeetCriteria).to.be.a('function')
    expect(Password.shouldMeetCriteria('999999', min, max)).to.equal(false)
    expect(Password.shouldMeetCriteria('223450', min, max)).to.equal(false)
    expect(Password.shouldMeetCriteria('123789', min, max)).to.equal(false)
  })
})