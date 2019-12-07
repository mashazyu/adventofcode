const opCodes = {
  1: function (program, index) {
    let aIndex = program[index+1]
    let bIndex = program[index+2]
    let resultIndex = program[index+3]
    let newIndex = index+4

    program[resultIndex] = program[aIndex] + program[bIndex]

    return { program, index: newIndex}
  },
  2: function (program, index) {
    let aIndex = program[index+1]
    let bIndex = program[index+2]
    let resultIndex = program[index+3]
    let newIndex = index+4

    program[resultIndex] = program[aIndex] * program[bIndex]

    return { program, index: newIndex}
  },
  99: function (program, index) {
    return { program, index: program.length }
  },
  'default': function(program, index) {
    return { program: ['SOS'], index: program.length }
  }
}

function run(program) {
  let state = {
    program: program,
    index: 0,
  }
  while(state.index <= (state.program.length - 1)) {
    let { program, index } = state
    let currentOpCode = program[index]

    state = (opCodes[currentOpCode] || opCodes['default'])(program, index)
  }

  return state.program
}

module.exports = {
  run
}