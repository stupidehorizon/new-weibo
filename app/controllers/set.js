const User=require('../models/user')
const fs=require('fs')
const path=require('path')

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

exports.photochange=function(req,res){
	const id=req.body.userId
	const img=req.files.photo
	const imgType = img.type
 	const imgPath = img.path
  	const imgName = img.name
	if (imgName) {
	    fs.readFile(imgPath, function(err, data) {
		    let timestamp = Date.now()
		    let type = imgType.split('/')[1]
		    let poster = timestamp + '.' + type
		    let newPath = path.join(__dirname, '../../', '/public/upload/' + poster)
		    fs.writeFile(newPath, data, function(err) {			  
		    	if(err)
		    		console.log(err)
		    	User.findById(id,function(err,user){
		    		if (err) {
	          			console.log(err)
	        		}
		    		user.update({photo:newPath},function(err,user){
		    			if (err) {
			          		console.log(err)
			        	}
		    			res.render('setphoto')	
		    		})		    		
		    	})
		    })
	    })
	}
}