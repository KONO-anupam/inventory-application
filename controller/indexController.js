const db = require('../db/query.js');
const { validationResult } = require('express-validator');

async function getAllGames(req,res){
    const games = await db.getAllGames();
    res.send('All Games:' + games.map(game=>game.title).join(', '));

}

module.exports = getAllGames;
userController = require('../controller/indexController');
