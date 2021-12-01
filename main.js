// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')


for (const glyph of hearts) {
    glyph.addEventListener('click', likeCallBack)
  }

function likeCallBack(event) {
  console.log(event)
  let heart = event.target
  mimicServerCall()
  .then(function() {
    console.log(heart)
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart')
    } else {
      heart.classList.remove('activated-heart')
      heart.innerText = EMPTY_HEART
    }

  }) 

  .catch((err) => {
    let errorMessage = document.getElementById("modal")
    errorMessage.classList.remove("hidden")
    setTimeout(function() {
      let addMessage = document.getElementById("modal")
      addMessage.classList.add("hidden")
    }, 3000)


  }) 
}
/*
let hearted = document.getElementsByClassName('like=glyph')
hearted.classList.add('activated-heart')
console.log(res)
*/

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
  
}

