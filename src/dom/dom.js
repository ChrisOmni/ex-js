/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  // Write your code here
  document.getElementById("change-my-color").style.color = "rgb(255, 0, 0)"
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  // Write your code here
  document.getElementById("add-your-elements-in-this-element").innerHTML = (`<p>Bonjour</p><p>Toto</p>`)
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here
  const newList = document.getElementById("add-list-here").innerHTML = (`<ul id="list-1"></ul>`)
  for(let i = 0; i < listElements.length; i++) {
     console.log(document.getElementById("list-1"))
    document.getElementById("list-1").innerHTML += (`<li id="${listElements[i].name}">${listElements[i].name}</li>`)
    document.getElementById(`${listElements[i].name}`).style.backgroundColor = listElements[i].color
  }
}