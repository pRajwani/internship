var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var uniSchema = new Schema({
   uniname:{
       type:String,
       required:true
   },
   registrationDate:{
       type:Date,
       required:true
   },
   expiryDate:{
       type:Date,
       required:true
   },
   imgUrl:{
       type:String,
       required:true
   },
   NoOfStudents:{
       type:Number,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   webUrl:{
       type:String,
       required:true
   },
   contactNo:{
       type:Number,
       required:true
   }
})

var UniversityDetails = mongoose.model('UnivDeatils',uniSchema);
module.exports=UniversityDetails;