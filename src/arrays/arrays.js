/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  // Write your code here
  const arrayJoined = array.join(" ")
  const arrayRearranged = arrayJoined.match(/\b\w+\b/g)
  return arrayRearranged
}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  // Write your code here
  const newArray = array1.concat(array2)
  return newArray
}

/**
 * @param {array} array an array of arbitrary elements
 * @param {number} index where you need to replace the element in the array
 * @param {...*} newElements
 * @return {array<*>} A new array, sorted, **the original array should not be modified**
 */
export function replaceElementsInArrayAtAGivenPlace(
  array,
  index,
  ...newElements
) {
  // Write your code here
  return array.toSpliced(index, newElements.length, ...newElements)
}
