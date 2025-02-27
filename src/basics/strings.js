/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  const regex = new RegExp(needle, "gi")
  if (!typeof value === "string") {
    throw new Error("all the parameters must be strings!!!")
  } else {
    const result = haystack.replaceAll(regex, replacing(needle, haystack, newWord))
    return result
  }
}

function replacing(needle, haystack, newWord) {
  const needleArr = needle.split("")
  const newWordArr = newWord.split("")
  const haystackArr = haystack.split("")
  const newSize = newWordArr.length - needleArr.length;
  let i = 0
  let char = ""
  if (newWordArr.length > needleArr.length) {
    while (i < newSize - 1) {
      if (newWordArr.length > needleArr.length){
        newWordArr.pop()
      }
      if (`${haystackArr[i]}` == `${haystackArr[i]}`.toUpperCase()){
        char += `${newWordArr[i]}`.toUpperCase()
      } else {
        char += newWordArr[i]
      }
      i++
    }
    return char
  } else {
      while (i < newWordArr.length) {
        if (`${haystackArr[i]}` == `${haystackArr[i]}`.toUpperCase()){
          char += `${newWordArr[i]}`.toUpperCase()
        } else {
          char += newWordArr[i]
        }
        i++
      }
    } 
  return char
}

console.log(findAndReplacePreservingCase('toto', 'ToTo is a good programmer', 'ta'))