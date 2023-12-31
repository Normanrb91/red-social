const express = require('express');
const cors = require('cors');
const path = require('path')
const { dbConnection } = require('./database/dbConnection');

const routerAuth = require('./routes/auth.routes');
const routerUSer = require('./routes/user.routes');
const routerFollow = require('./routes/follow.routes');
const routerPublication = require('./routes/publication.routes');
const routerComment = require('./routes/comment.routes');
const routerLike = require('./routes/like.routes');

require('dotenv').config();

const app = express();

dbConnection();

app.use(cors({origin: '*'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, resp)=> {
    resp.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/api/auth', routerAuth);
app.use('/api/user', routerUSer);
app.use('/api/follow', routerFollow);
app.use('/api/publications', routerPublication);
app.use('/api/comment', routerComment);
app.use('/api/like', routerLike);


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT || 3000} `);
});