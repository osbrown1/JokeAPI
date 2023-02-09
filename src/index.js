import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Steam from './steam.js';


// Business Logic

function searchSteam(search) {
  let promise = Steam.searchSteam(search);
  promise.then(function(data) {
    printElements(data);
  }, function(errorArray) {
    printError(errorArray);
  });
}
// UI Logic

// function printError(error, city) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: 
//   ${error}.`;
// }

// function printError() {
//   document.querySelector("#showResults").innerText = `${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
// }

function printElements(apiResponse, search) {
  document.querySelector('#showResponse').innerText = `The example in ${search} is ${apiResponse.main.example}%. 
  The game is ${apiResponse.main.example}`;
}

function printError(request, apiResponse, search) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the thing for ${search}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const search = document.querySelector('#searchBar').value;
  document.querySelector('#searchBar').value = null;
  searchSteam(search);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});