const express = require("express")
const router = express.Router()
const {usersModel} = require("../db/model")
router.post('/login', async (req, res, next) => {
  const {body, cookies} = req;
  if(body.account.trim()&&body.password.trim()){
    const result = await usersModel.find(body)
    if(result[0]){
      res.cookie('LOGIN_SESSION', `${result[0]._id}`, {httpOnly: true, path: '/', sameSite: 'Lax'});
      res.json({
        code: 1,
        data: result[0],
        msg: "LOGIN SUCCESS"
      })
      return;
    }else{
      usersModel.create({
        account: body.account,
        password: body.password
      }, (err, resolve)=>{
        if(err){
          res.json({
            code: -1,
            msg: "LOGIN FAIL"
          })
        }else{
          res.json({
            code: 1,
            msg: "SIGN SUCCESS"
          })
        }
      })

    }
  }
})

module.exports = router