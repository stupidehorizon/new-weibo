const Weibo= require('../models/weibo')

exports.publish= (req,res)=>{
    let _weibo= req.body.weibo
    let weibo = new Weibo(_weibo)
    weibo.save((err,weibo)=>{
        if (err) 
          return err
        res.redirect('/')
    })
}