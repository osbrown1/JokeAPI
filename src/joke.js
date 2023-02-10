export default class Joke {
  /* eslint-disable no-console */
  static generateJoke() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v2.jokeapi.dev/joke/Any?safe-mode&type=single`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        console.log(response);
        if(response.error === false) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
  /* eslint-enable no-console*/
}

// export default class Joke {
//   /* eslint-disable no-console */
//   static generateJoke(generate) {
//     return new Promise(function (resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v2.jokeapi.dev/joke/Any?safe-mode&type=single`;
//       request.addEventListener("loadend", function () {
//         const response = JSON.parse(this.responseText);
//         console.log(response);
//         if(response.error === false) {
//           resolve([response, generate]);
//         } else {
//           reject([this, response, generate]);
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
//   /* eslint-enable no-console*/
// }

// export default class Joke {
//   let joke = new Joke();
//   Joke.generateJoke(generate); {
//     return fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
//     .then(function(response) {
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText}`;
//         throw new Error(errorMessage);
//       } else {
//         return response.json();
//       }
//     })      
//     .catch(function(error) {
//       return error;
//     });
// }
// }

// export default class Joke {
//   static generateJoke(generate) {
//     return fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
//     .then(function(response) {
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText}`;
//         throw new Error(errorMessage);
//       } else {
//         return response.json();
//       }
//     })      
//     .catch(function(error) {
//       return error;
//     });
// }
// }








// export default class Joke {
//   static async generateJoke(generate) {

//     try {
//       const response = await fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`);
//       const jsonifiedResponse = await response.json();
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText}
//         ${jsonifiedResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       return jsonifiedResponse;
//     } catch(error) {
//       return error;
//     }
//   }
// }