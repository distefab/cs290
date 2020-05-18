var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  var gParams = [];
  for (var g in req.query){
    gParams.push({'name':g,'value':req.query[g]})
  }
  var showGet = {};
  showGet.values = gParams;
  res.render('home', showGet);
});

app.post('/', function(req,res){
  var pParams = [];
  for (var k in req.body){
    pParams.push({'name':k,'value':req.body[k]})
  }
  var showPost = {};
  showPost.values = pParams;
  res.render('homePost', showPost);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});