// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

function pow(number, power) {
  if (power === 0) {
    return 1
  }

  let temp = number
  for (let i = 1; i < power; i = i + 1) {
    temp = temp * number;
  }
  return temp
}

// do not remove this line, it is for tests
module.exports = pow;
