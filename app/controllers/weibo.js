const Weibo= require('../models/weibo')
const fs=require('fs')
const path=require('path')

exports.imgUpload=function(req,res,next){
	const imgArr=req.files.img
	let pathArr=[]
	let len=imgArr.length
	if(imgArr instanceof Array){
		imgArr.forEach((item,index)=>{ 
			const imgType = item.type
		 	const imgPath = item.path
		  	const imgName = item.name
			if (imgName) {
			    fs.readFile(imgPath, function(err, data) {
				    let timestamp = Date.now()
				    let type = imgType.split('/')[1]
				    let poster = timestamp + '.' + type
				    let newPath = path.join(__dirname, '../../', '/public/upload/' + poster)
				    pathArr.push(poster)
				    fs.writeFile(newPath, data, function(err) {			  
				    	if(err)
				    		console.log(err)
				    	if(index==len-2){
				    		req.poster=pathArr
							next()	
						}
				    })
			    })
			}
		})
	}else{
		next()
	}
}

exports.publish= (req,res)=>{
    let _weibo= req.body.weibo
    _weibo.imgUrl=req.poster
   
    let weibo = new Weibo(_weibo)
    weibo.save((err,weibo)=>{
        if (err) 
          return err
        res.redirect('/')
    })
}