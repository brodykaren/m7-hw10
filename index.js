// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var contentInput = document.getElementById ('content')
var notesInput = document.getElementById ('notes')
var formEl = localStorage.getItem ('content')
var clear = localStorage.getItem ('#clear')

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

var contentInput
var cookies = document.cookie.split ('  ; ' )
console.log (cookies)
var contentInputcookie = cookies.find ( function (cookie)
{
  
  return cookie.startsWith (notesInput)



})


console .log (contentInputcookie)

if (contentInputcookie) {

contentInput = contentInputcookie.split (' = ' ) [ notes]

}

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE






  formEl.onsubmit = function (e) {

    e.preventDefault ()
    console.log ('submitted')
    formEl.textContent = contentInput.value + " " + notesInput.value
    localStorage.setItem ('content', contentInput.value)
    localStorage.setItem (' notes', notesInput.value)
  }



  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp
