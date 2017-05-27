const Index = require('../app/controllers/index')
const Signin=require('../app/controllers/signin')
const Weibo=require('../app/controllers/weibo')  

module.exports=function(app){
	app.get('/',Index.index)
	app.get('/showsignin',Signin.showSignin)
	app.get('/showsignup',Signin.showSignup)
	app.post('/signin',Signin.signin)
	app.post('/signup',Signin.signup)
	app.get('/logout',Signin.logout)
	app.post('/publish',Weibo.publish)
}

