const developersController = require('../controller/developersController')
const {Router} = require('express');
const developersRouter = Router();

developersRouter.get('/', developersController.getAllDevelopers)