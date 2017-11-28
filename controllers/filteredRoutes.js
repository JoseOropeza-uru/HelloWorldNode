const express = require('express');
let router = express.Router();
const middleware = require('../middlewares/middleware');

router.get('/hello/:name',middleware,(req,res)=>{
    res.send({hello:req.params.greeting,status:200});
});
router.post('/sum',(req,res,next)=>{
    req.body.c = req.body.a+req.body.b;
    next();
},(req,res)=>{
    console.log(req.body.c);
    res.send({sum:req.body.c,status:200});
});
module.exports = router;