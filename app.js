const express=require('express')

const port=process.env.PORT||3000

app=express()
app.set('views', './views/pages')
app.set('view engine', 'ejs')

require('./config/routes')(app)

app.listen(port)
console.log('imooc started on port ' + port)
