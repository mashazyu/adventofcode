function shouldMeetCriteria(password, min, max){
  // It is a six-digit number.
  const isSixDigitsNumber = /^\d{6}$/.test(password)
  //The value is within the range given in your puzzle input.
  const passwordNumeric = parseInt(password)
  const isInRange = password >= min && password <= max
  //Two adjacent digits are the same (like 22 in 122345).
  const hasTwoAdjacentDigits = /^(00[1-9]*|0*11[2-9]*|[0-1]*22[3-9]*|[0-2]*33[4-9]*|[0-3]*44[5-9]*|[0-4]*55[6-9]*|[0-5]*66[7-9]*|[0-6]*77[8-9]*|[0-7]*88[9]*|[0-8]*99$)$/.test(password)
  //Going from left to right, the digits never decrease
  const doNotDecrease = /^0*1*2*3*4*5*6*7*8*9*$/.test(password)

  return isSixDigitsNumber && isInRange && hasTwoAdjacentDigits && doNotDecrease
}

module.exports = {
  shouldMeetCriteria
}