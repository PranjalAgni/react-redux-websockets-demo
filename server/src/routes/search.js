const SearchService = require('../services/search/search');
const winston = require('winston');

class SearchRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.post('/v1/search', this.getSearchItem.bind(this));
  }

  getSearchItem(req, res, next) {
    const { search } = req.body.data;
    SearchService.getGifs(search)
      .then(result => res.json(result))
      .catch(next);
  }
}

module.exports = SearchRoute;
