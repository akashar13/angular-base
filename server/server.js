const express=require('express')
const BodyParser=require('body-parser')


const port = 3100
const api =require('./routes/api')
const app=express()

app.use(BodyParser.json())

app.use('/api',api)

app.get('/',function(req,res){
    res.send('hello form server')


})
app.listen(port,function(){
    console.log('server running successfully:' + port)


})
