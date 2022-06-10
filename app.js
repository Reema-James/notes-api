const bodyParser=require('body-parser');
const express= require('express');
const app=express();
const jsonfile= require('jsonfile');
app.use(bodyParser.json());
const groupRoutes=require('./routes/groups');

app.use(`/`, groupRoutes);



app.get(`/`, async(req,res)=>{
    res.send({
        "name" : "tuty"
    });
})


app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})