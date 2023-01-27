/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
/**
 * Started with a for loop to identify the elements in 'rolls' and then sorted for if a number was found which would also catch an empty array.
 */
function isValid(rolls) {
  for (let i = 0; i < rolls.length; i++) {
      if (typeof rolls[i] !== "number") {
        return false;
      }
  }
  return true;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
/**
 * Started with a for...of loop to identify the elements in rolls and used an if statement to catch with the 'value' is in 'rolls'.
 */
function findValue(rolls, value) {
  for (let number of rolls) {
    if (number === value) {
      return value;
    }
  }
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
/**
 * Started with creating a new array and then a for...of loop to check for the element from the original array being more than or equal to the 'lowest' value and then pushed the element
 * onto the new array if it was more than or equal to the 'lowest' value. After the loop finishes the new array will be returned.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  for (let number of rolls) {
    if (number >= lowest) {
      newArray.push(number);
    }
  }
  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
/**
 * Started with creating an object to store the elements of the 'rolls' array in as they are counted for how often they occur inside a for...of loop. 
 * When the loop finishes the object will be returned.
 */
function getRollCounts(rolls) {
  let rollCounts = {};
  let count = 1;
  for (let number of rolls) {
    if (rollCounts[number] >= count) {
      rollCounts[number] += count;
    } else {
      rollCounts[number] = count;
    }
  }
  return rollCounts;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
