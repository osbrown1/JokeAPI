export default class Steam {
  static searchSteam(search) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.steampowered.com/IStoreQueryService/SearchSuggestions/v1/?access_token=${process.env.API_KEY}`;

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

