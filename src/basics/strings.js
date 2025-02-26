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
  // replaceAll
  const regex = new RegExp(needle, "gi")
  if (!typeof value === "string") {
    throw new Error("all the parameters must be strings!!!")
  } else {
    const result = haystack.replaceAll(regex, replace(needle, newWord))
    return result
  }
}

function replace(needle, newWord) {
  const needleArr = needle.split("")
  const newWordArr = newWord.split("")
  if (newWordArr.length > needleArr.length) {
    const newSize = needle.length - newWord.length;
    let i = newSize
    //while (i != 0) {
      newWordArr.pop()
      i--
    }
    const result = newWordArr.join()
    return result
  } else 
  return newWord
}

console.log(findAndReplacePreservingCase('toto', 'Toto is a good programmer', 'anonymous'))