const User=require('../models/user')

exports.info=(req,res)=>{
	res.render('setinfo',{
		title:'账号设置'
	})
}

exports.photo=(req,res)=>{
	res.render('setphoto',{
		title:'账号设置'
	})
}


exports.namechange=function(req,res){
	let name=req.body.name
	let id=req.body.id
	if (id) {
    	User.findById(id, function(err, user) {
	        if (err) {
	        	console.log(err)
	     	}
	     	user.update({name:name},function(err,user){
	     		if (err) {
	          		console.log(err)
	        	}
	        	 req.session.user.name=name            //设置session
        		 app.locals.user.name=name
	        	 res.send({success:true})
	     	})
	    })
	}
}