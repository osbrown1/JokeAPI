export default class Joke {
  static searchJoke(search) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v2.jokeapi.dev/joke/Any?safe-mode`;

      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if(this.status === 200) {
          resolve([response, search]);
        } else {
          reject([this, response, search]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}



