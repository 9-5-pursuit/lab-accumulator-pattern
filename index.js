/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  if (rolls.every(Number)){
    return true
  } else {
    return false 
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  if (rolls === []){
    return null
  } 
  if (rolls.includes(value)){
    return value 
  } else {
    return null
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  for (const i of rolls){
    if ( i >= lowest){
      newArray.push(i);
    }
  }
  return newArray;
}
// let newArray = [];
// for (const i of rolls)
//   if ( i > lowest){
//     return higherValues = rolls.filter(i)
    
//   } else if ( i <= lowest){
//     let lowestValues = rolls.filter(i)
//     newArray.push(lowerValues)
//   }
//}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {

  if (rolls.length === 0){
    return {};
  }
   //create an empty object
let newObj = {}

rolls.forEach(roll => {
  if (newObj.hasOwnProperty(roll)) {
    newObj[roll]++;
  } else {
    newObj[roll] = 1;
  }
});
return newObj;







}
// // iterate through the array to find something
//   let value = 'roll'
//   let count = 0;
// rolls.forEach (x => {
//   if (x === value) {
//     count++;
//   }
// })








//for (i = 0; i < rolls.length; i++){
  //  let arrayEl = rolls[i];







//   let count = rolls.filter('roll')

//   newObj[roll] = roll * count
//   return newObj
// }




// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
