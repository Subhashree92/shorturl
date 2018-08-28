const express=require('express');
const _=require('lodash');
const bodyParser=require('body-parser');
const mongoose=require('./config/db');
const{ObjectId}=require('mongodb');
const morgan=require('morgan');
const shorthash=require('shorthash');
const app=express();
const port=3000;
const{shortRouter}=require('./router/short');

app.use(bodyParser.json());
app.use(morgan('short'));
app.use('/',shortRouter);

// app.get('/' ,(req,res)=>{
//     res.send()
//    });




   app.listen(port,()=>{
    console.log('listening on port ',port);
});