var mongoose= require('mongoose');
var schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    userId : {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

var user = mongoose.model('Users',userSchema);
module.exports= user;