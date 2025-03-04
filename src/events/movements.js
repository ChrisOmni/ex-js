/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
  // Write your code here
  addEventListener("mousemove", (event) => {
    document.getElementById("mouse-coordinates").innerText = `x: ${event.clientX}, y: ${event.clientY}`
  })
}

const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change his border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
  // Write your code here
  const focusMeInput = document.getElementById("focus-me")
  const label = document.querySelector('label[for="focus-me"]')
  enteringColor = focusMeInput.style.borderColor
  focusMeInput.addEventListener("blur", () => {
    focusMeInput.style.borderColor = enteringColor
  })
  focusMeInput.addEventListener("mouseover", ({ currentTarget }) => {
    for (const label of currentTarget.labels) {
      label.textContent = 'Yes, you hover me !'
    }
  })
  focusMeInput.addEventListener("focus", () => {
    focusMeInput.style.borderColor = randomRGB()
  })
  focusMeInput.addEventListener("mouseout" , () => {
    for (const label2 of focusMeInput.labels) {
      label2.textContent = 'A second label ! just for fun'
    }
    label.textContent = "Focus me :"
  })
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  // Write your code here
  const labels = document.querySelectorAll('label[for="focus-me"]')
  const focusMeInput = document.getElementById("focus-me")
  focusMeInput.addEventListener("input", () => {
    enteringColor = randomRGB()
    for (const label of labels) {
      label.style.color = enteringColor
    }
  })
}