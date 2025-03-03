/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  // Write your code here
  const message = document.getElementById("write-some-text")
  message.addEventListener("keypress", (i) => {
    if (i.key === "Enter") {
      if (message.value === "") {
        return;
    } else {
      alert(message.value)
    }
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
  // Write your code here
  const listInput = document.getElementById("list-input")
  const listElements = document.getElementById("list")
  listInput.addEventListener("keypress", (i) => {
    if (i.key === "Enter") {
      if (listInput.value === "") {
        return
      }
      listElements.innerHTML += (`<li id="id">${listInput.value}</li>`)
      listInput.value = ""
    }
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  // Write your code here
  const listElements = document.getElementById("list")
  const listInput = document.getElementById("list-input")
  listElements.addEventListener ("click", () => {
    document.getElementById(`id`).remove()
    listInput.value = ""
  })
}