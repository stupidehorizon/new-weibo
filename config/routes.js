const Index = require('../app/controllers/index')
const Signin=require('../app/controllers/signin')
const Weibo=require('../app/controllers/weibo') 
const Set=require('../app/controllers/set') 
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
//app.use(multipartMiddleware)

module.exports=function(app){
	app.get('/',Index.index)
	app.get('/showsignin',Signin.showSignin)
	app.get('/showsignup',Signin.showSignup)
	app.post('/signin',Signin.signin)
	app.post('/signup',Signin.signup)
	app.get('/logout',Signin.logout)
	app.post('/publish',multipartMiddleware,Weibo.imgUpload,Weibo.publish)
	app.get('/set/info',Set.info)
	app.post('/username',Set.namechange)
	app.get('/set/photo',Set.photo)
	app.post('/set/photochange',multipartMiddleware,Set.photochange)
}

