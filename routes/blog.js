const express = require("express")
const router = express.Router()
const {blogsModel} = require("../db/model")
router.get('/list', (req, res, next) => {
  blogsModel.find((error, result)=>{
    if(error){
      res.json({
        code: -1,
        msg: 'FAIL'
      })
      return;
    }
    res.render('home', {list: result})
  })
  
})
router.get('/add', (req, res, next) => {
  res.render('send')
})
router.post('/add', (req, res, next) => {
  const {body, cookies} = req;
  body.user = cookies.LOGIN_SESSION;
  body.time = new Date();
  blogsModel.create(body, (error, result)=>{
    if(error){
      res.json({
        code: -1,
        msg: 'SEND FAIL'
      })
      return;
    }
    res.json({
      code: 1,
      msg: 'SEND SUCCESS'
    })
  })
})
router.get('/mine', async (req, res, next) => {
  const {cookies} = req;
  const list = await blogsModel.find({"user": cookies.LOGIN_SESSION});
  if(list){
    res.render('mine', {list});
  }else{
    res.json({
      code: -1,
      msg: 'No Record'
    })
  }
})
module.exports = router