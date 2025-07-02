const db = require('../db/query.js');

async function getAllDevelopers(req,res){
    const developers = await db.getAllDevelopers();
    res.send('the developers are: '+developers.map(developer=> developer.name).join(', '));
}

module.exports = {
    getAllDevelopers
}