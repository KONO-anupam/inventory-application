const db =  require('../db/query.js');

async function getGame(req,res){
    const game = await db.getGame(req.params.id); 
    res.send('Your Game is: '+game);
}