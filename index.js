/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] !== "number" ){
      return false
    } 
  
    
  }
  return true
}
 


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let result = null


  for (const roll of rolls) {
    if (rolls[roll] === value) {
      result = value
    }
  }
  return result
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */

// if empty array is given return empty array
// check if values in the array is greater than the "lowest" value
//  check if values in the array is equal to the "lowest" value
// include or exclude values if required
function filterOutLowValues(rolls, lowest) {
// this will check for the empty array
  // if (rolls.length === 0){
  //   return rolls
  // }
let arr = []

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest){
      arr.push(rolls[i])
    }
  }




  return arr

// roll is the new i - this is how it will itterate through the array
// how do you filter for values greater or lower? for of loop ? or for loop? consider the options

  // for (const roll of rolls) {
  //   if (rolls[roll] > lowest)
  //   return rolls
  // }
  
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
//  if not rolled return empty object
//  return an object that provides the count for the amount of times a number appears
// increment the count for dupicates
function getRollCounts(rolls) {

  let obj = {} //creating an object
  count = 1 // we created the variable count that we are going to use as the value for our keys in the object
  //  it is set to 1 because we are starting with 1 if the target exist

for (const roll of rolls) {
  // roll is the new i - it is what we are using to iterate through the array in this case
  // rolls is the array we are itterating through

    // if(obj[roll] >= 1){ 
  // we are checking if the duplicate exist on the object, 
  // OBJ[ROLL] we are basically decalring a SERIES OF NEW KEYS in the object (that will continue to change) 
  // as the new keys come in they will be declared in the object OBJ
  // EXAMPLE obj is the new object IT IS EMPTY
  // obj[roll] is PUSHING IN THE ARRAY OF ROLLS
  // WHAT IT LOOKS LIKE => rolls = [1, 2, 3] => obj {"1": , "2": , "3": }

    if(obj.hasOwnProperty(roll)) {
  // obj was chosen because that is the object we are pushing in the new SERIES OF KEYS roll
  // hasOwnProperty is simply checking if the property exist 
  // roll is the property we are pushing in as the key
  // THIS FORM ALSO ALLOWS YOU TO CREATE A NEW KEY - QUESTIONG even if it is being called on?


  // we made a if statement because we want to check if it has one then it should return only one IF NOT returns the appropiate amount for the duplicate
  // OBJ[ROLL] - why did we choose the bracket? 
  // why choose the obj[roll] 
  // obj[roll] - this form allows it to PUSH a new key, it is ever changing basically a LET - UNOFFICIAL
  // obj.roll || obj["roll"] is more of a CONST its officially creating a new key - OFFICIAL
      obj[roll]++
  // this is because you want the count to increment by one every time it finds a duplicate within the object
    } else {
      obj[roll] = count;
  // 
  // 
    }
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
