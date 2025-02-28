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
  const newSize = newWordArr.length - needleArr.length
  let char = ""
    if (newWordArr.length > needleArr.length) {
      for (let i = 0; i < newSize; i++) {
        newWordArr.pop()
      }
    }
    for (let j = 0; j < newWordArr.length; j++) {
      if (`${needleArr[j]}` == `${needleArr[j]}`.toUpperCase()){
        char += `${newWordArr[j]}`.toUpperCase()
      } else {
        char += newWordArr[j]
      }
    }
  return char
}
