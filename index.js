/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
let accumulator = true;

for (roll of rolls) {
  if (typeof roll === "number") {//checks if all of the values of the array is a number
    accumulator;
  } else {
    accumulator = false
  }
} 

  return accumulator//default accumulator to false
  
}


  
    /*for (i = 0; i < rolls.length; i++) {
    if (rolls.length === 0) {
       return true
     } if (typeof rolls === "number") {
       return true
     }
     else return false
    }
     */

     /*
      */



/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let accumulator = null;
  for (roll of rolls) {
    if (roll === value) {
      accumulator = value;
    }
  }
  
  return accumulator
}
/*for (i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
      return value
    } else {
      return null
    }
    if (rolls.length === 0) {
      return null
    }
} 
*/


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  
for(let roll of rolls) {
  if (roll >= lowest) {
    newArray.push(roll)
  }
}
return newArray//accumulator
}
/*
let newArray = [];
  for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] >= lowest) {
        return newArray.push(rolls[i])
      }
      newArray
}
 */

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
let object = {};


for (roll of rolls) {
  if (object[roll]) {
    object[roll] += 1;
}
else {
  object[roll] = 1
}
}
  return object
}
/*
let obj = {};
for (let i = 0; i < rolls.length; i++){
  if (object[rolls]) {
    object[rolls[i]] += 1;
  } else {
    obj[rolls[i]] = 1
  }
  return obj
}
*/

console.log(getRollCounts([2, 4, 2, 5, 6]))
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
