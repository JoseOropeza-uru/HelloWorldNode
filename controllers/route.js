const express = require('express');
let router = express.Router();

router.get('/:name',(req,res)=>{
    res.send({hello:`Hello ${req.params.name}!`,status:200});
});
router.post('/sum',(req,res)=>{
    console.log(req.body);
    res.send({sum:req.body.a+req.body.b,status:200});
});
module.exports = router;