function shouldNumbersIncrease(password) {
  const charArray = Array.from(password)
  let doNumbersIncrease = true

  charArray.forEach((char, i) =>{
    if (i <=5) {
      if (parseInt(char) > parseInt(charArray[i+1])) {
        doNumbersIncrease = false
      }
    }
  })

  return doNumbersIncrease
}

function shouldMeetCriteria(password, min, max){
  // It is a six-digit number.
  const isSixDigitsNumber = /^\d{6}$/.test(password)
  //The value is within the range given in your puzzle input.
  const passwordNumeric = parseInt(password)
  const isInRange = password >= min && password <= max
  //Two adjacent digits are the same (like 22 in 122345).
  const hasTwoAdjacentDigits = /([0-9])\1+/.test(password)
  //Going from left to right, the digits never decrease
  const doNotDecrease = shouldNumbersIncrease(password)

  return isSixDigitsNumber && isInRange && hasTwoAdjacentDigits && doNotDecrease
}

module.exports = {
  shouldMeetCriteria,
  shouldNumbersIncrease
}