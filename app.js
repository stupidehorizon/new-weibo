const express=require('express')
//const path=require('path')
const port=process.env.PORT||3000
const mongoose=require('mongoose')
const session=require('express-session')
const mongoStore=require('connect-mongo')(session)
const dbUrl='mongodb://localhost/weibo1'
const bodyParser=require('body-parser')
const moment=require('moment')
const morgan = require('morgan')
const multipart = require('connect-multiparty')
const path=require('path')
const fs = require('fs')
//const multipartMiddleware = multipart()
//const Weibo= require('./app/models/weibo')

mongoose.Promise = global.Promise

mongoose.connect(dbUrl)
mongoose.connection.on('connected', function(){
    console.log('Connection success!');
});
mongoose.connection.on('error', function(err){
    console.log('Connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Connection disconnected');
});

app=express()
app.set('views', './views/pages')
app.set('view engine', 'ejs')
app.locals.moment=moment
app.locals.user=false

app.use(express.static('./public'))
app.use(morgan(':method :url :status'))
app.use(session(
	{
	  secret:'weibo',
	  resave:false,
	  saveUninitialized: true,
	  store:new mongoStore({                                   //将session存储到mongodb数据库
	    url:dbUrl, 
	    collection:'session'
	  })
	})
)

app.use(bodyParser.urlencoded({extended:true}))
//app.use(multipartMiddleware)

require('./config/routes')(app)

app.listen(port)
console.log('weibo started on port ' + port)
