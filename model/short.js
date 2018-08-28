const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const shorthash=require('shorthash');
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
     type:String
     
 },
 createdAt:{
    type:Date,
    default:Date.now
 }
 
});
ShortSchema.pre('save',function(next){
if(!this.hashed_url){
this.hashed_url=shorthash.unique(`${this.Original_url}`);
}
next();
})


const shortUrl=mongoose.model('hashurl',ShortSchema);

module.exports={
    shortUrl
}