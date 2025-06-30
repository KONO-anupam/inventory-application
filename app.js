const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter'); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
})