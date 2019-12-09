const Password = require('./Password')

const min = 264360
const max = 746325

let numberOfValidPasswords = 0
let counter = min

while (counter <= max) {
  numberOfValidPasswords = Password.shouldMeetCriteria(counter.toString(), min, max) ?
    numberOfValidPasswords +=1 :
    numberOfValidPasswords

  counter +=1
}

console.log('/// number of valid passwords is ', numberOfValidPasswords)