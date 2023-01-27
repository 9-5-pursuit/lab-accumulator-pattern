/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {


  //console.log(Object.values(rolls))
  //console.log(rolls)

  for (let i in rolls) {
    if (typeof (rolls[i]) !== 'number') {
      return false
    }
  }
  return true

}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  //console.log(rolls)
  //console.log(value)

  for (let i in rolls) {
    if (rolls[i] === value) {
      return rolls[i]
    }
  }
  return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  //console.log(rolls)
  //console.log(lowest)

  let array = []

  for (let i in rolls) {
    if (rolls[i] >= lowest) {
      array.push(rolls[i])
    }
  }
  return array
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  //console.log(rolls)

  let obj = {}

  for (let i = 0; i < rolls.length; i++) {
    if (obj[rolls[i]]) {
      obj[rolls[i]] += 1
    } else {
      obj[rolls[i]] = 1
    }
  }
  //console.log(obj)
  return obj


  // let obj = {}

  // rolls.forEach(i => obj[i] = (obj[i] || 0) + 1)

  // return (obj)
}









// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
