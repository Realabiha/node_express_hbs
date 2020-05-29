const express = require('express');
const router = express.Router();
let operate = require('./operate');
router.post('/', function (req, res, next) {
    let param = {};
    param.email = req.body.email;
    param.password = req.body.password;
    console.log(param);
    operate.save(param).then(result => {
        if (result) {
            res.json({
                data: result,
                success: true
            })
        } else {
            res.json({
                data: result,
                success: false
            })
        }
    });
});
module.exports = router;