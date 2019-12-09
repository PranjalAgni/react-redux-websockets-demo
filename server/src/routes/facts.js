const FactsService = require('../services/facts/facts');

class FactsRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/v1/facts', this.getFacts.bind(this));
  }

  getFacts(req, res, next) {
    FactsService.getFacts()
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = FactsRoute;
