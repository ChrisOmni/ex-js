/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  // Write your code here
  if (isNaN(diameter) || diameter < 0) {
    throw new Error("your diameter should be a positive number!!!")
  }
  return 4/3*Math.PI*((diameter/2)**3)
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  // Write your code here
  if (isNaN(n)) {
    throw new Error("you should input a Number!!!")
  }
    return (Math.round(n*10))/10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
  let sum = 0
  for (const grade of grades) {
    if (isNaN(grade) || grade === "") {
      throw new Error("You should only input numbers!!")
    }
    sum += grade
  }
  return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
  let sum = 0
  for (const grade of grades) {
    if (isNaN(grade) || grade === "") {
      throw new Error("You should only input numbers!!!")
    }
    sum += grade
  }
  return (Math.round((sum/grades.length)*10))/10
}
