'use strict';
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser');
const index = require('./modules/routes/index');
const users = require('./modules/routes/users');
const getMap = require('./modules/routes/getMap');
const port = process.env.PORT || 8080;
require('dotenv').config();

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/users', users);
app.use('/getMap', getMap);

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up