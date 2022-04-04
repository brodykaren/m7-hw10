// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
function getCookie(name){
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`)
  return parts.pop().split(';').shift()
}

let name = getCookie("name")

let text = localStorage.getItem("text")


nameSpan.textContent = name
textarea.value = text
// Then apply them to elements on the page
// YOUR CODE HERE



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
 document.cookie = `name = ${nameSpan.textContent}`

 localStorage.setItem("text", textarea.value)
  
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  localStorage.removeItem("text")
  document.cookie = `name = ${nameSpan.textContent}; max-age=0`
  nameSpan.textContent = `Your Name`
  textarea.value = ""
  // Clear localstorage's content
  // YOUR CODE HERE








  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp
