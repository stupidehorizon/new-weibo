const Weibo=require('../models/weibo')

exports.index=function(req,res){
	Weibo
      .find({})
      .populate('from', 'name')
      .exec(function(err, weibos) {
	        res.render('index', {
	          title: "微博首页",
	          weibos:weibos
	        })
		})
 }