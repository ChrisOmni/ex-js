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
  if (!typeof value === "string" || needle === "" || haystack === "" || newWord === "") {
    throw new Error("all the parameters must be strings and not empty!!!")
  } else {
    const result = haystack.replaceAll(regex, (match) => replacing(match, newWord))
    return result
  }
}

function replacing(needle, newWord) {
  const needleArr = needle.split("")
  const newWordArr = newWord.split("")
  const newSize = newWordArr.length - needleArr.length;
  let i = 0
  let j= 0
  let char = ""
  if (newWordArr.length > needleArr.length) {
    while (j < newSize) {
      newWordArr.pop()
      console.log(newWordArr)
      j++
    }
    while (i < newWordArr.length) {
      if (`${needleArr[i]}` == `${needleArr[i]}`.toUpperCase()){
        char += `${newWordArr[i]}`.toUpperCase()
      } else {
        char += newWordArr[i]
      }
      i++
    }
  } else {
      while (i < newWordArr.length) {
        if (`${needleArr[i]}` == `${needleArr[i]}`.toUpperCase()){
          char += `${newWordArr[i]}`.toUpperCase()
        } else {
          char += newWordArr[i]
        }
        i++
      }
    } 
  return char
}
