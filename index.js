/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let trueVal = true;
  for(let arrVal of rolls)
  {
    if(typeof arrVal !== "number")
    {
      trueVal = false;
    }
  }
  return trueVal;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let fVal = null;
  for (let arrVal of rolls)
  {
    if(arrVal === value)
    {
      fVal = value;
    }
  }
  return fVal;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let fArr = []
  for (let arrVal of rolls)
  {
    if(arrVal>=lowest)
    {
      fArr.push(arrVal);
    }
  }
  return fArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let fObj = {}
  for (let numbers of rolls)
  {
    if(fObj.hasOwnProperty(numbers))
    {
      fObj[numbers] += 1;
    }
    else
    {
      fObj[numbers] = 1;
    }
  }
  return fObj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
