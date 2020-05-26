var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'noja'});


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req,res){
    
    res.render('navbar_home');
  });

  app.get('/menu', function(req,res){
    
    res.render('navbar_menu', {Layout:'nojs'});
  });

  app.get('/contact', function(req,res){
    
    res.render('navbar_contact',{Layout:'nojs'});
  });

  app.get('/about', function(req,res){
    
    res.render('navbar_about',{Layout:'nojs'});
  });

app.use(function(req,res){
  res.status(404);
  res.render('404',{Layout:'nojs'});
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500',{Layout:'nojs'});
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});