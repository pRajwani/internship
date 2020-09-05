var express = require('express');
var router = express.Router();
var univDetails= require('../model/uniDetails')

/* GET home page. */
router.get('/', function(req, res, next) {
  univDetails.find({})
  .then((resp)=>{
    res.json(resp);
  },(err)=>next(err))
  .catch((err)=>next(err))
});

router.post('/',(req,res,next)=>{
  univDetails.create(req.body)
  .then((details)=>{
    res.sendStatus=200;
    res.setHeader('Content-Type','application/json')
    res.json(details)
  },(err)=>next(err))
  .catch((err)=>next(err))
})

router.route('/u/:detailId')
.put((req,res,next)=>{
    univDetails.findByIdAndUpdate(req.params.detailId,{$set:req.body},{new:true})
    .then((detail)=>{
      res.sendStatus=200
      res.setHeader('Content-Type','application/json')
      res.json(detail)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

.delete((req,res,next)=>{
  univDetails.findByIdAndDelete(req.params.detailId)
  .then((resp)=>{
    res.sendStatus=200;
    res.setHeader('Content-Type','application/json')
    res.json(resp);
  },(err)=>{next(err)})
  .catch((err)=>next(err))
})

module.exports = router;
