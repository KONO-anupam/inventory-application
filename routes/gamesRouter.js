const { Router } = require("express");
const gamesController = require('../controller/gamesController')
const gamesRouter = Router();

gamesRouter.get('/:id',gamesController.getGame);
gamesRouter.post('/',gamesController.postGame);
gamesRouter.put('/:id', gamesController.updateGame);

module.exports = gamesRouter;