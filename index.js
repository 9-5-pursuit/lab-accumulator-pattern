/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  //console.log(rolls);
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] !== "number") {
      return false;
      //console.log("Is not Number");
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
  // console.log(rolls);
  // console.log(value);

  // console.log(rolls.length);
  if (rolls.length === 0) {
    return null;
  } else {
    for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] === value) {
        return rolls[i];
      }
    }
    return null;
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let emptyArray = [];

  if (rolls.length === 0) {
    return [];
  } else {
    for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] >= lowest) {
        emptyArray.push(rolls[i]);
      }
    }
    return emptyArray;
  }
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let threeCount = 0;
  let fourCount = 0;
  let twoCount = 0;
  //console.log(rolls);
  if (rolls.length === 0) {
    let emptyObj = {};
    return emptyObj;
  } else {
    for (let key in rolls) {
      //console.log(key);
      //key acts as an index counter for each loop
      //console.log(rolls);
      if (rolls[key] === 2) {
        twoCount += 1;
      } else if (rolls[key] === 3) {
        threeCount += 1;
      } else {
        fourCount += 1;
      }
    }
    // console.log(twoCount); //3 times
    // console.log(threeCount); // 2 times
    // console.log(fourCount); // 1 times
    return { 2: twoCount, 3: threeCount, 4: fourCount };
  }
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
