const User=require('../models/user')

exports.show=(req,res)=>{
	res.render('userDetail',{
		title:'账号设置'
	})
}

exports.namechange=(req,res)=>{
	let name=req.body.name
	let id=req.body.id
	if (id) {
    	User.findById(id, function(err, user) {
	        if (err) {
	        	console.log(err)
	     	}
	     	console.log(user)
	     	user.name=name
	        user.save(function(err, movie) {
	         	if (err) {
	          		console.log(err)
	        	}
	        	res.send('{success}')
	        	res.redirect('/userdeit')
	      	})
	    })
	}
}