const express=require('express')
//const path=require('path')
const port=process.env.PORT||3000

app=express()
app.set('views', './views/pages')
app.set('view engine', 'ejs')

app.use(express.static('./public'))

require('./config/routes')(app)

app.listen(port)
console.log('imooc started on port ' + port)
