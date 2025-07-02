const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter'); 
const gamesRouter = require('./routes/gamesRouter');
const developersRouter = require('./routes/developersRouter')
const path = require('path');
app.use(express.urlencoded({ extended: true }));

app.use('/',indexRouter);
app.use('/games', gamesRouter);
app.use('/developers', developersRouter);

const PORT = process.env.PORT || 3000;

app.get('/add-game', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'addGame.html'));
});

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
})
