/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  //  Write your code here 
  const resultPlace = document.getElementById("display-here")
  const fetchBtn = document.getElementById("click-to-fetch")
  fetchBtn.addEventListener("click", () => {
    fetch("https://api.github.com/octocat", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response Status : ${response.status}`)
        }
        return response.text()
      })
      .then((text) => {
        resultPlace.innerText = text
      })
  })
}
