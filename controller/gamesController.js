const db =  require('../db/query.js');

async function getGame(req,res){
    try{

        const game = await db.getGame(req.params.id); 
        if(!game){
            return res.send.status(404).send('game not found')
        }
        res.send('Your Game is: '+game);
    }
    catch(error){
         console.error('Error fetching game:', error);
        res.status(500).send('Internal server error' );
        
    }
}



module.exports = {
    getGame
}