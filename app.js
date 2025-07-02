const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter'); 
const gamesRouter = require('./routes/gamesRouter');

app.use('/',indexRouter);
app.use('/games', gamesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
})