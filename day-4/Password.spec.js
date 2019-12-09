const Password = require('./Password')
const expect = require('chai').expect

describe('Password', () => {
  it('should digits increase', () => {
    expect(Password.shouldNumbersIncrease).to.be.a('function')
    expect(Password.shouldNumbersIncrease('111111')).to.equal(true)
    expect(Password.shouldNumbersIncrease('264588')).to.equal(false)
    expect(Password.shouldNumbersIncrease('356800')).to.equal(false)
  }),
  it('does password meet criteria', () => {
    const min = 0
    const max = 999999

    expect(Password.shouldMeetCriteria).to.be.a('function')
    expect(Password.shouldMeetCriteria('111111', min, max)).to.equal(true)
    expect(Password.shouldMeetCriteria('223450', min, max)).to.equal(false)
    expect(Password.shouldMeetCriteria('123789', min, max)).to.equal(false)
  })
})