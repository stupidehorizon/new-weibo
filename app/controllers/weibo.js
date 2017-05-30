const Weibo= require('../models/weibo')
const fs=require('fs')
const path=require('path')

exports.imgUpload=function(req,res,next){
	const img=req.files.img
	const imgType = img.type
 	const imgPath = img.path
  	const imgName = img.name
	if (imgName) {
	    fs.readFile(imgPath, function(err, data) {
		    let timestamp = Date.now()
		    let type = imgType.split('/')[1]
		    let poster = timestamp + '.' + type
		    let newPath = path.join(__dirname, '../../', '/public/upload/' + poster)
		    console.log(newPath)
		    fs.writeFile(newPath, data, function(err) {
		        req.poster = poster
		      next()
		    })
	    })
	}
    else{
    	next()
    } 
}

exports.publish= (req,res)=>{
	console.log(req.body)
	console.log(req.files)
    let _weibo= req.body.weibo
    _weibo.imgUrl=path.join(__dirname, '../../public/upload/' + req.poster)
    let weibo = new Weibo(_weibo)
    weibo.save((err,weibo)=>{
        if (err) 
          return err
        res.redirect('/')
    })
}