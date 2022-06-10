const bodyParser=require('body-parser');
const express= require('express');
const app=express();
const cors=require('cors');
app.use(bodyParser.json());
app.use(cors());

app.get ('/getData', (req,res) => {
    res.json({
        "statusCode":200,
        "statusMessage":"SUCCESS"
    })
});

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})