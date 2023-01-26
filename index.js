/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  for (let i = 0; i < rolls.length; i++) {
  if (typeof rolls[i] !== `number`) {
    // typeof roll[i] will return what kind of data type, boolean, number, etc. and use i not 0 because the loop will not add to the 0. it will add to the i which represents index 0 and will increment.
    return false;
    } 
  }
  return true; 
  
}
  
    
//     //if the rolls are all numbers then true {
//   } else if (rolls === 0) {
//     return true;
//   } else {
//     return false;
//    //if the rolls are not all numbers then false
//  }
//   }


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

  if (rolls.includes(value)) {
    return value;
  } else {
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
newArray = [];
  // asking for a new array with values <= lowest val
// for (let i = 0; lowest.length )
for (let i = 0; i < rolls.length; i++) {
  if (rolls[i] >= lowest) {
    // is the first index >= to lowest? yes? then push to new array
    // is the second index >= to lowest? yes? then push to new array
    //will continue loop until index is greater than the length, then it will stop
    newArray.push(rolls[i])
  }
}
  return newArray;
//return the new array with new numbers
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let myObject = {};

  for (let i = 0; i < rolls.length; i++) {

    if (!myObject[rolls[i]]) {
      // if it does not have its own property
      myObject[rolls[i]] = 1;
      } else {
      myObject[rolls[i]] += 1;
      } 
  }
    return myObject;
    // need a object to return with key value pairs
  
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};