const bodyParser=require('bodyParser');
const express= require('express');
const app=express();
const jsonfile= require('jsonfile');
app.use(bodyParser.json());
const groupRoutes=require('./routes/groups');

app.use(`${api}/groups`, groupRoutes);




//database

const path= require('./database.json')
jsonfile.readFile(path, (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})