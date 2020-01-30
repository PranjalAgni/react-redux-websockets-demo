const SearchService = require('../services/search/search');

class SearchRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.post('/v1/search', this.getSearchItem.bind(this));
  }

  getSearchItem(req, res, next) {
    SearchService.getGifs(req.body.search)
      .then(result => res.json(result))
      .catch(next);
  }
}

module.exports = SearchRoute;
