/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  var count = 0
  for (var r of rolls) if (typeof r=='number') count ++ 
  return count==rolls.length ? true : false
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (var r of rolls) {
    if (r==value) return r
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
  var arr = []
  for (var r of rolls) if (r>= lowest) arr.push(r)
  return arr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values 
 * are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  var count = new Set([...rolls])
  let obj = {}
  var innercount = 0
  for (var i of count) {
    for (var j of rolls) if (i==j) innercount ++
    obj[i]=innercount
    innercount = 0
  }
    return obj
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
