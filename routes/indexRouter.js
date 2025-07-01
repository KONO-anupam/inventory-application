const { Router } = require('express');
const indexController = require('../controller/indexController.js')
const indexRouter = Router();

indexRouter.get('/', indexController.getAllGames);

module.exports = indexRouter;