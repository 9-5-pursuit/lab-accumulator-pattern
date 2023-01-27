/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

  
    function isValid(rolls) {
      return rolls.every(value => typeof value === 'number');
    }
    
    console.log(isValid([])); //returns true because the empty array satifies the condition that every element in the array is a number.
    console.log(isValid([3, 2, 3, 6])); //returns true because every element in the array is a number.
    console.log(isValid(["three", 2, 3, "six"])); //returns false because every element in the array is not a number.
    


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */

function findValue(rolls, value) {
    if (!rolls.length) {
      return null;
    }
    return rolls.includes(value) ? value : null;
    //"includes" checks to see if the "value" is present in the "rolls" array. If so, returns value. If not returns "null".
    // "?" operater is shorthand for if-else statement.
  }
  
  
  console.log(findValue([], 4)); // should return null because empty array
  console.log(findValue([2, 3, 4, 4, 6], 4)); // should return 4 because array contains value 4
  console.log(findValue([2, 3, 4, 4, 6], 1)); // should return null because array does not contain value "1".
  



/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */

  function filterOutLowValues(rolls, lowest) {
    return rolls.filter(roll => roll >= lowest);
    //"filter" method creates a new array with all elements that pass the test.
    //"arrow" checks to see if the value of "roll" is greater than or equal to the "lowest" value. 
    //If the "roll" value is less will not be included in the array. Ig greater, will be included in the new array.
  }
  
  console.log(filterOutLowValues([2, 4, 2, 5, 6], 3))//return will be 4, 5, 6 because the values are greater than 3.
  console.log(filterOutLowValues([3, 2, 4, 2, 5, 6, 3], 3))//will return 3, 4, 5, 6, 3 because all the values in the array are greater or equal to 3.
  console.log(filterOutLowValues([3, 2, 4, 2, 5, 6, 3], 2))//will return original array of 3, 2, 4, 2, 5, 6, 3 because all values are greater than or equal to 2.
  console.log(filterOutLowValues([3, 2, 4, 2, 5, 6, 3], 7))//will return empty array because no values greater than 7 in the array.
  
   

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

  function getRollCounts(rolls) {//takes in number array and returns object where they keys are numbers rolled, values are the number of times roll appears in the array.
    const rollCounts = {};//empty object used to store counts of every roll.
  
    for (let i = 0; i < rolls.length; i++) {
      const roll = rolls[i];
      if (rollCounts[roll]) {
        rollCounts[roll]++;
      } else {
        rollCounts[roll] = 1;
      }
    }
  
    return rollCounts;
  }
  
  const rolls1 = [];
  const rolls2 = [2, 3, 4];
  const rolls3 = [2, 2, 3, 4, 3, 2];
  
  console.log(getRollCounts(rolls1));//{}
  console.log(getRollCounts(rolls2));//output should be 2: 1, 3: 1, 4: 1
  console.log(getRollCounts(rolls3));//Outpust should be 2: 3, 3: 2, 4: 1
  


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
