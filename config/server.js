var express = require('express');
var app = express();
var consign =require('consign');
app.set('view engine','ejs');
app.use(express.static('./app/public'));
consign().include('app/routes').into(app);
app.set('views','./app/views');
module.exports= app;
