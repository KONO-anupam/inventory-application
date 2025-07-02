const db =  require('../db/query.js');

async function getGame(req,res){
    try{

        const game = await db.getGame(req.params.id); 
        if(!game){
            return res.send.status(404).send('game not found')
        }
        res.send('Your Game is: '+game.title);
    }
    catch(error){
         console.error('Error fetching game:', error);
        res.status(500).send('Internal server error' );
        
    }
}



async function updateGame(req, res) {
    // TODO: Implement this function
    res.status(501).send('updateGame not implemented yet');
}

async function postGame(req, res) {
    try {
        console.log('Request body:', req.body); // Debug log
        
        const { title, genres, developers } = req.body;
        
        if (!title) {
            return res.status(400).send('Title is required');
        }

        // Insert the game first
        const gameId = await db.insertGame({ title });
        console.log('Game inserted with ID:', gameId);

        // Handle genres if provided (from comma-separated string)
        if (genres && genres.trim()) {
            const genreArray = genres.split(',').map(g => g.trim()).filter(g => g);
            for (const genre of genreArray) {
                const genreId = await db.findOrCreateGenre(genre);
                await db.linkGameGenre(gameId, genreId);
            }
        }

        // Handle developers if provided (from comma-separated string)
        if (developers && developers.trim()) {
            const developerArray = developers.split(',').map(d => d.trim()).filter(d => d);
            for (const developer of developerArray) {
                const devId = await db.findOrCreateDeveloper(developer);
                await db.linkGameDeveloper(gameId, devId);
            }
        }

        res.send(`Game "${title}" added successfully with ID: ${gameId}`);
    } catch (error) {
        console.error('Error adding game:', error);
        res.status(500).send('Error adding game: ' + error.message);
    }
}

module.exports = {
    getGame,
    postGame,
    updateGame

}