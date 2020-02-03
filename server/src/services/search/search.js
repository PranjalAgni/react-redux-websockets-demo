const axios = require('axios');

class SearchService {
  async getGifs(search) {
    //https://api.giphy.com/v1/gifs/search?api_key=0S0a34W71hTneFExH0AHGUn0Uj99Le3Y&q=butterfly&limit=10
    const API_KEY = '0S0a34W71hTneFExH0AHGUn0Uj99Le3Y';
    const limit = 20;

    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}`
    );

    const resultGifStore = response.data.data.map(gif => {
      return gif.images.fixed_height_small.url;
    });

    return {
      data: resultGifStore
    };
  }
}

module.exports = new SearchService();
