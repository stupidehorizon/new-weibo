const User=require('../models/user')

//注册页面
exports.showSignin=function(req,res){
	res.render('signin',{
		title:'注册'
	})
}

exports.showSignup=(req,res)=>{
	res.render('signup',{
		title:'登陆'
	})
}

//注册
exports.signin = function(req, res) {
  var _user = req.body.user
  User.findOne({passname: _user.passname},  function(err, user) {
    if (err) {
      console.log(err)
    }

    if (user) {
      console.log('用户已存在')
      return res.redirect('/showsignin')
    }
    else {
      user = new User(_user)
      user.save(function(err, user) {
        if (err) {
          console.log(err)
        }

        res.redirect('/showSignup')
      })
    }
  })
}

//登录
exports.signup=function(req,res){
  var pasname=req.body.user.pasname
  var password=req.body.user.password
 
  User.findOne({pasname:pasname},function(err,user){
 
    if(err)
      console.log(err)

    if(!user){   //为空
      console.log("用户不存在")
      return res.redirect('/showsignin')
    }
    console.log(user.password)
    console.log(password)
    user.comparePassword(password,function(err,isMatch){
      if(err){
        console.log(err)
      }
      if(isMatch){
        console.log("登录成功")
        req.session.user=user             //设置session
        app.locals.user=user
        return res.redirect('/')
      }else{
        console.log('password is not matched')
        res.redirect('/showSignup')
      }
    })
  })
}

exports.logout=function(req,res){
  delete req.session.user
 app.locals.user=false
  res.redirect('/')
}