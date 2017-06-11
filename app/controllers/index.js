const Weibo=require('../models/weibo')

exports.index=function(req,res){
	Weibo
      .find({})
      .sort({'_id':-1})
      .populate({
		  path: 'from',
		  select: 'name photo'
		})
      .exec(function(err, weibos) {
      		console.log(req.session.user)
      		if(!req.session.user)
      			req.session.user=false


	        res.render('index', {
	          title: "微博首页",
	          weibos:weibos,
	          user:req.session.user
	        })
		})
 }