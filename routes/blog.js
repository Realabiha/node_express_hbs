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
  const {body} = req
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
module.exports = router