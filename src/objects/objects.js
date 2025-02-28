/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  // Write your code here
  const userObj = {
    first_name: "Toto",
    last_name: "Tutu",
  }
  return userObj
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  // Write your code here
  return object.first_name + " " + object.last_name
}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  // Write your code here
  const result1 = []
  const result2 = []
  for (const [key, value] of Object.entries(object)) {
    result1.push(`${[key].join("").toUpperCase().split()}`)
    result2.push(`${[value].join("").toLowerCase().split()}`)
  }
  const finalResult = {keys: result1, values: result2}
  return finalResult
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  // Write your code here
  const one =  users[0]
  const two =  users[1]
  const three =  users[2]
  const four =  users[3]
  const five = users[4]
  const six =  users[5]
  let ages = []
  let  i = 0
  users.forEach((element) => {
    ages.push(users[i].age)
    i++
  })
  const youngest = ages.sort().find(name => users[name] === ages[0])
  console.log(ages)
  console.log(youngest)
}

retrieveMaximumMinimumUserAges([
  { name: 'Toto', age: 20 },
  { name: 'Tata', age: 18 },
  { name: 'Titi', age: 28 },
  { name: 'Tutu', age: 32 },
])

/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  // Write your code here
}

/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  // Write your code here
}