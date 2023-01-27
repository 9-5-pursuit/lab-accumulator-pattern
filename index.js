/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  if (rolls.length === 0) { 
      return true;   
  }
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] === "number") {
      return true;

     } else if 
      (typeof rolls[i] !== "number") {
        return false;
  }

   // if (rolls === []) 
    //   return true;   
  
  // for (let roll in rolls) {
    //   if (typeof roll === "number") {
    //     return true;

    //   } else if
    //     (typeof roll !== "number")
    //     return false;
  

    }
  }


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

    if (rolls.includes(value)) {
      return value;
    } else if 
      (!rolls.includes(value) || rolls === [])
      return null;
  
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
let newArr = [];

    // if (rolls.length === 0) {
    //   return newArr;
    // }

    // for (let roll in rolls) {
    //   if (roll >= lowest)
    //     newArr.push(roll);
    // }

    
    for (let i = 0; i < rolls.length; i++) {
      if (rolls[i] >= lowest) {
        newArr.push(rolls[i]);
     }
  } 
    return newArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let rollObj = {}
  let count = 0;
    //  if (!rolls)
    //  return {};

    for (let i = 0; i < rolls.length; i++) {
      if (rollObj.hasOwnProperty(rolls[i])) {
        count += 1;
        rollObj[rolls[i]] = count; 
      console.log(rollObj);
    } else
       rollObj[rolls[i]] = 1; 
   }
    return rollObj;
}

 /* Second accumulator pattern starts here!
 let result = [];

 for (let key in accumulator) {
   result.push(Number(key));
 }

 return result;
}

const rolls = [4, 5, 6, 1, 5, 4, 4, 1];
console.log(getUniqueRolls(rolls)); //> ; [ 1, 4, 5, 6 ]
*/

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
