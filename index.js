var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');


app.use(morgan('dev'));
//app.use('/ejs',passport_route);
//app.use('/api',approute);

var dbURI = 'mongodb://localhost:27017/rahul';
mongoose.Promise = global.Promise;
mongoose.connect(dbURI,function(err)
	{
		if(err)
          {
          	console.log("error");
          }
          else{
          	console.log("successfully connected");
          }
	});


 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


var data1 = require('./app/userdata/blog_router.js')
//app.use('/',data);
app.use('/',data1);

 require('./app/route.js')(app);
app.use(express.static('./public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res)
{
	res.sendFile(path.join(__dirname +'/public/view/Frontpage.html'));
	//res.sendFile(path.join(__dirname + 'second.html'));
      //res.send("dyuvgsuivhi");
});

app.get('/blog.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/blog.html'));
})

app.listen(port);
console.log("server is running on port "+port);

exports = module.exports = app;