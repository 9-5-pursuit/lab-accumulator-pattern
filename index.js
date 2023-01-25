You will complete four functions in the `index.js` file which will require you to apply the accumulator pattern to an array of numbers. Each time `rolls` is mentioned, it refers to an array of numbers.

/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] !== 'number') {
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
function findValue(rolls, value) {
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
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
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] >= lowest) {
          newArray.push(rolls[i]);
      }
  }
  return newArray;
}
console.log(filterOutLowValues([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6], 4));

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */This function takes in an array of numbers (rolls) and returns an object where the keys are the numbers rolled and the values are the number of times that roll appears in the rolls array. For example, if the input array is [1, 2, 3, 3, 4, 4, 4], the output object would be {1: 1, 2: 1, 3: 2, 4: 3}.
 
 function getRollCounts(rolls) {
  let rollCounts = {};
  for (let i = 0; i < rolls.length; i++) {
    if (rollCounts[rolls[i]]) {
      rollCounts[rolls[i]]++;
    } else {
      rollCounts[rolls[i]] = 1;
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
