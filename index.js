/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

// checking if values are of a certain type so use typeof
// initial value is true
// return true by default

function isValid(rolls) {

let value = true;

  for (let roll of rolls) {
    if (typeof roll === "number") {
      value = true;
    } else if (typeof roll !== "number") {
      value = false;
    }
  }

return value;

}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */

// if value is in array, return array, if not return false
// array.includes? maybe


function findValue(rolls, value) {

  return rolls.includes(value) ? value : null;

}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */

// returns new array, default value can be empty array
// return array that has all numbers that are equal to/greater than lowest value given

function filterOutLowValues(rolls, lowest) {

let value = [];

  for (let i = 0; i < rolls.length; i++) {
    let element = rolls[i];
  
    if (element >= lowest) {
      value.push(element);
    }

  }

return value;

}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

// obj has rolls as keys and counts as values
// default value will be empty obj?
// honestly didnt know how to solve this so i had to get answer from the review sorry

function getRollCounts(rolls) {

let result = {};

  for (let i = 0; i < rolls.length; i++) {
    if (!result.hasOwnProperty(rolls[i])) {
      result[rolls[i]] = 1;
    } else {
      result[rolls[i]] ++
    } 
  }

return result;

}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
