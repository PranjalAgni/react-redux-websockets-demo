const axios = require('axios');

class FactsService {
  async getFacts() {
    //http://numbersapi.com/random/trivia
    //https://api.chucknorris.io/jokes/random
    const types = ['trivia', 'year', 'date', 'math'];
    const type = types[Math.floor(Math.random() * types.length)];
    const result = await axios.get(`http://numbersapi.com/random/${type}`);
    return result.data;
  }
}

module.exports = new FactsService();
