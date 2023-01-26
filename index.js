/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
//Guard clause to check if array is empty before doing any other operations
if (rolls.length <= 0) return true

  for (let roll of rolls) {
    if (Number.isInteger(roll)) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
//Guard clause to check if array is empty before doing any other operations
if (rolls.length <= 0) return null
  
  for (let roll of rolls) {
      if (rolls.includes (value)) {
        return value
      } else {
        return null
      }
    }
  }


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  return rolls.filter(roll => roll >= lowest);
}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {}
  for (let roll of rolls) {
    if (obj[roll]) { //check if the current roll already exists as a key in the object
      obj[roll]++; // If true, increment the value (count of the rolls) of the key by 1
    } else {
      obj[roll] = 1; //If false, add a new key-value pair to the object with the roll as the key and the value 1
    }
   }
    return obj;
  }


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
