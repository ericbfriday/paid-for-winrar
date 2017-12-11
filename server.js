'use strict';
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser');
const index = require('./modules/routes/index');
const users = require('./modules/routes/users');
const getMap = require('./modules/routes/getMap');
const decoder = require('./modules/firebase/decoder');
const port = process.env.PORT || 8080;
require('dotenv').config();

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/users', users);
app.use('/getMap', getMap);

// Decodes the token in the request header and attaches the decoded token to the request.
app.use(decoder.token);

/* Whatever you do below this is protected by your authentication.
WARNING: So far you are returning secret data to ANYONE who is logged in.
There is still more work to be done if you want to implement roles.
No authorization has been completed yet in this branch.
You can use req.decodedToken and some logic to do that.
Other branches in the nodeFire repository show how to do that. */

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up