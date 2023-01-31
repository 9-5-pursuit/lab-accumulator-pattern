/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @return[s {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let ifValid = true;
for (let roll of rolls){
  if (typeof roll !== "number"){
    return !ifValid 
     } 
   }
  return ifValid
 } 




/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let ifValue = null;
  for (i = 0; i < rolls.length; i++){
    if (rolls[i] === value){
      ifValue = rolls[i];
    }
  }
  return ifValue
}


 //ex: 1// let finalValue = null;
 //for (let roll of rolls){
 // if (roll === value)
 //findValue= values
 //  }
 // }
// return finalValue;

//ex: 2//return roll.includes(value) ? values : null;

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let ifValue = [];
  for (i = 0; i < rolls.length; i++){
    let element = rolls[i];
    if (element >= lowest){
      ifValue.push(element);
    }
  }
  return ifValue

}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {}
  let i = 0
  while (i < rolls.length){
    if (!obj.hasOwnProperty(rolls[i])){
      obj[rolls[i]] = 1
    
    } else {
      obj[rolls[i]]++;
    }
    i++;
  }
  return obj
}



// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
