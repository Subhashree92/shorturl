const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ShortSchema=new Schema({
 title:{
     type:String,
     required:true
 },
 Original_url:{
    type:String,
    required:true
 },
 Tags:[String],
 hashed_url:{
     type:String,
     required:true
 },
 createdAt:{
    type:Date,
    default:Date.now
 }
 
});

const shortUrl=mongoose.model('hashurl',ShortSchema);
module.exports={
    shortUrl
}