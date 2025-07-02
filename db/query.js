const pool = require('./pool');

async function getAllGames(){
    const {rows} = await pool.query('SELECT * FROM games')
    return rows;
}

async function getGame(id){
    const {rows} = await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    return rows[0];
}

async function getAllDevelopers(){
    const {rows} = await pool.query('SELECT * FROM ')
}
module.exports = {
    getAllGames,
    getGame,
    getAllDevelopers 
};