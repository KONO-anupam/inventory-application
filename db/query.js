const pool = require('./pool');

async function getAllGames(){
    const {rows} = await pool.query('SELECT * FROM games')
    return rows;
}

async function getGame(id){
    const { rows } = await pool.query('SELECT title FROM games WHERE id = $1', [id]);
    return row;
}
module.exports = {
    getAllGames,
    getGame 
};