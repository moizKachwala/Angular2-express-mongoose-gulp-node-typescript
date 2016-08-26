/// <reference path="../typings/index.d.ts" />

import express = require('express');
import BaseRoutes = require("./config/routes/Routes");
import bodyParser = require("body-parser");

import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

app.use(bodyParser.json());
app.use('/api', new BaseRoutes().routes);

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
}

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
}); 