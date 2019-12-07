const fs = require('fs')
const Program = require('./Program')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
}

let code = []

function getNewCode(noun, verb) {
  const puzzleInput = require("./program-input.txt")
  let initialCode = puzzleInput.split(',').map(Number)
  initialCode[1] = noun
  initialCode[2] = verb
  return initialCode
}

code = getNewCode(12,2)
console.log('day 2: part 1 answer ', Program.run(code)[0])

let noun = -1
let verb = -1
let result = 0

do {
  noun +=1
  verb = -1
  do{
    verb +=1
    console.log('noun, verb ', noun, verb)
    code = getNewCode(noun, verb)
    result = Program.run(code)[0]
  } while (result !== 19690720 && verb < 99)
} while (result !== 19690720 && noun < 99)

console.log('day 2: part 12 answer (verb, noun, result=19690720) ', verb, noun, result)
