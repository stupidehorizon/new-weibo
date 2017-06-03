const Weibo=require('../models/weibo')

exports.index=function(req,res){
	Weibo
      .find({})
      .sort({'_id':-1})
      .populate('from', 'name')
      .populate('from','photo')
      .exec(function(err, weibos) {
	        res.render('index', {
	          title: "微博首页",
	          weibos:weibos
	        })
		})
 }