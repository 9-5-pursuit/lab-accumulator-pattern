/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let newArray = [];
  newArray = rolls;
  if (newArray.length === 0) {
    console.log("length is null => true");
    return true;
  } else {
      console.log("length is not null");
      for (let i = 0; i < newArray.length; i++) {
        if (typeof newArray[i] !== "number") {
          console.log("array element is not a number => false");
          console.log(newArray);
          return false;
        }
      }
        console.log("all elements of array are numbers => true")
        console.log(newArray);
        return true;
    }
}
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let newArray = [];
  newArray = rolls;
  if (newArray.length === 0) {
    console.log("the array is empty => null");
    console.log(newArray);
    return null;
  }
  
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == value) {
      console.log("array contains value => value");
      console.log(value);
      return value;
    } 
  } 
  console.log("array does not contain the value => null");
  console.log(newArray);      
  return null;
}
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  newArray = [];
  if (rolls.length === 0) {
    return [];
  }
  
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest) {
      newArray.push(rolls[i]);
    }
    continue;
  }
  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  if (rolls.length === 0) {
    console.log("the array is empty => {}");
    return {};
  } 
  let rollCounts = {};
    for (let i = 0; i < rolls.length; i++) {
      if (rollCounts[rolls[i]])  {
        rollCounts[rolls[i]] += 1;
      } else {
          rollCounts[rolls[i]] = 1;
        }
      }
      console.log(rollCounts);
      return rollCounts;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
