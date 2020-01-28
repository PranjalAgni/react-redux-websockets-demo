const axios = require('axios');

class FactsService {
  async getFacts() {
    //http://numbersapi.com/random/trivia
    //https://api.chucknorris.io/jokes/random
    const result = await axios.get('http://numbersapi.com/random/trivia');
    return result.data;
  }
}

module.exports = new FactsService();
