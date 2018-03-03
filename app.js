// APP.js (App Cycle)

// Define Dependancies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// Create Express App
const app = express();

// Set Up View Engine
app.set('views', path.join(__dirname, 'views')); // Location of .pug files
app.set('view engine', 'pug'); // Sets view engine to read the .pug files

// Serve Up Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Anything in public will be served as-is.

// Translate Raw Requests > req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// HANDLE ROUTES
app.use('/', routes);

// ERROR HANDLERS

app.use(errorHandlers.notFound); // 404: Not Found

if (app.get('env') === 'development') { // Development Errors
    app.use(errorHandlers.developmentErrors);
  }
  
app.use(errorHandlers.productionErrors); //Production Errors

// EXPORT TO APP.js
module.exports = app;