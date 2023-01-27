/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let accumulator = false;
  for (let i = 0; i < rolls.length; i++) {
    let values = rolls[i]
   if (!isNaN(rolls)) {
      accumulator = true
    }
}
  return accumulator;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (let i = 0; i < rolls.length; i++) {
    if (rolls.includes(value)) {
      return value
    } else if (!rolls.length) {
      return null
    }
    return null
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = []
  for (let i = 0; i < rolls.length; i++) {
    if (!rolls.length) {
      return newArray
    } else if (rolls[i] >= lowest) {
      newArray.push(rolls)
      return newArray
  }
}
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // for (let i = 0; i < rolls.length; i++) {
  //   let counts = rolls[i]
  //   Object.keys(rolls)
  //   Object.values(counts)
  // }
  // // Object.keys(rolls)
  // // Object.values(rolls)
  // // return  `${keys}: ${values}`;a
  // return `${keys} ${values}`
// 
let count = 0
Object.values(count)
Object.keys(values)

for (let i = 0; i < rolls.length; i++) {
  if (!rolls.length) {
    return {}
  } else (rolls[i] == value) 
    count++
    return count
  }
  
}



// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
