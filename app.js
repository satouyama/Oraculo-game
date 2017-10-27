//exports configs server
var app = require('./config/server');

//set port server
var port = process.env.PORT || 3000;

//listen port
app.listen(port, function(){
 console.log('SERVER ON');
});
