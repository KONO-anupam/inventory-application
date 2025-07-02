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
    const {rows} = await pool.query('SELECT * FROM developers ');
    return rows;
}
async function insertGame(){
    const {rows} = await pool.query(
        `INSERT INTO games (title)
        VALUES $1 RETURNING id`, [title]  
    );
}
async function findOrCreateGenre(genre){

    const {rows} = await pool.query(
        `SELECT * FROM genres WHERE genre = $1`,[genre]
    )
    if (rows.length>0) return rows[0].id;

    const insert = await pool.query(
        'INSERT INTO genres (genre) ($1) RETURNING id',[genre]
    )
    return insert.rows[0].id;
}

async function findOrCreateDeveloper(name) {
    const { rows } = await pool.query('SELECT id FROM developers WHERE name = $1', [name]);
    if (rows.length > 0) return rows[0].id;

    const insert = await pool.query('INSERT INTO developers (name) VALUES ($1) RETURNING id', [name]);
    return insert.rows[0].id;
}
async function linkGameGenre(gameId, genreId){
        await pool.query(
            `INSERT INTO games_genre (game_id,genre_id) VALUES ($1, $2)`, [gameId,genreId]
        );
}
async function linkGameDeveloper(gameId, developerId){
        await pool.query(
            `INSERT INTO games_developer (game_id,developer_id) VALUES ($1, $2)`, [gameId,developerId]
        );
}


module.exports = {
    getAllGames,
    getGame,
    getAllDevelopers,
    insertGame,
    findOrCreateGenre,
    findOrCreateDeveloper,
    linkGameGenre,
    linkGameDeveloper 
};