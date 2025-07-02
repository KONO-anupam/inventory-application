const db = require('../db/query.js');

async function getAllDevelopers(req,res){
    const developers = db.getAllDevelopers();

}