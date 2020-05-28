const sql = require("mysql")
const conf = require("../conf/db_conf")

const con = sql.createConnection(conf)
con.connect()

module.exports = _ => {
  const promise = new Promise((resolve, reject) => {
    con.query(_, (err, data) => {
      if(err){
        reject(err)
        return
      }
      resolve(data)
    })
  })
  return promise
}