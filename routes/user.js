const express = require("express")
const router = express.Router()
const {usersModel} = require("../db/model")
router.post('/login', async (req, res, next) => {
  const {body} = req
  if(body.account.trim()&&body.password.trim()){
    const result = await usersModel.find(body)
    console.log(result, 'result')
    if(result[0]){
      res.json({
        code: 1,
        msg: "LOGIN SUCCESS"
      })
      return;
    }
  }
  res.json({
    code: -1,
    msg: "LOGIN FAIL"
  })
})

module.exports = router