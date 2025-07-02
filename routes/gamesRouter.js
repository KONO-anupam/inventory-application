const { Router } = require("express");
const gamesController = require('../controller/gamesController')
const indexController = require('../controller/indexController')
const gamesRouter = Router();


gamesRouter.get('/:id',gamesController.getGame);
gamesRouter.get('/',indexController.getAllGames);
gamesRouter.post('/',gamesController.postGame);
gamesRouter.put('/:id', gamesController.updateGame);

module.exports = gamesRouter;