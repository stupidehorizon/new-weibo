var mongoose = require('mongoose')
var WeiboSchema= require('../schemas/weibo')
var Weibo = mongoose.model('Weibo', WeiboSchema)

module.exports = Weibo