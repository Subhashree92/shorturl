const express=require('express');
const router=express.Router();
const _=require('lodash');
const {shortUrl}=require('../model/short');

router.get('/',(req,res)=>{
    shortUrl.find()
    .then((shorts)=>{
        res.send(shorts);
    }).catch((err)=>{
        res.send(err);
    })
})


router.get('/:hash',(req,res)=>{
    let Original_url=req.params.Original_url;
    shortUrl.findOne(Original_url)
    .then((shorts)=>{
        
        res.send(shorts.hashed_url);
    }).catch((err)=>{
        res.send(err);
    })
})


router.post('/',(req,res)=>{
    let body=req.body;
   //let body=_.pick(req.body['title','Original_url','Tags','hashed_url'])
    let hashurl=new shortUrl(body);
       hashurl.save().then((hashurl)=>{
           res.send(hashurl);
       })
       .catch((err)=>{
           res.send(err);
       })
   });





module.exports={
    shortRouter:router
}