const axios = require('axios');
const winston = require('winston');

class FactsService {
  async getFacts() {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    winston.debug('Api response: ', result.data);
    return result.data;
  }
}

module.exports = new FactsService();
