import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Joke from './joke.js';


// Business Logic

function generateJoke(generate) {
  Joke.generateJoke(generate)
  .then(function(response) {
    if (response instanceof Error) {
      printElements(response, generate);
    } else {
      printError(response, generate);
    }
  });
}

// UI Logic

function printElements(response, generate) {
  document.querySelector('#joke-content').innerText = `The example in ${generate} is ${response.main.example}. 
  The joke is ${response[0].main.example}`;
}

function printError(error, generate) {
  document.querySelector('#joke-content').innerText = `There was an error accessing the thing for ${generate}: ${error.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const generate = document.getElementById('generate-input').value;
  generateJoke(generate);
}

  window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click", handleFormSubmission);
  });


//document.getElementById("button").onclick = generateJoke();
//let myButton = document.querySelector(".submit");
//myButton.addEventListener('click', calculation() );

//   const generate = document.querySelector('#joke-container').value;
//   document.querySelector('#joke-container').value = null;
//   generateJoke(generate);
// }
