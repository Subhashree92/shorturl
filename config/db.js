const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Encoder',{useNewUrlParser:true});
module.exports=mongoose;