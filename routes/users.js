var express = require('express');
var router = express.Router();
var User= require('../model/user');
var bodyParser = require('body-parser');
const app = require('../app');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', (req,res,next)=> {
  User.find({})
  .then((user)=>{
    res.json(user);
  }, (err)=> next(err))
  .catch((err)=>next(err));
})

router.post('/', (req,res,next)=>{
  user=new User({userId:req.body.userId, password:req.body.password})
  user.save()
  .then((user)=>{
    res.json(user)
  })
})

router.route('/login')
//.options((req,res,next)=>{res.sendStatus=200;})
.post( function(req, res, next) {
  console.log(req.body);
  User.findOne({userId:req.body.userId})
  .then((user)=>{
      if(user.password==req.body.password){
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json')
        res.json({user:user,success:true})
      }
      else{
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json')
        res.json({success:false})
      }
  },(err)=>{
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json')
        res.json({success:false});
  })
  .catch((err)=>{res.sendStatus=200;
    res.setHeader('Content-Type','application/json')
    res.json({success:false});})
});

module.exports = router;
