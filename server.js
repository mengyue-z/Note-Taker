// DEPENDENCIES
const express = require('express');

//create an express server & set a port
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// access public file to use css and index.js
app.use(express.static(__dirname + '/public'));


// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// LISTENER
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
