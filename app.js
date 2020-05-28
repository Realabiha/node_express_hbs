const express = require("express")
const hbs = require("hbs")
const path = require("path")
const checkSql = require("./db/sql")
let data = {}

const app = express()

// 使用hbs模板引擎
app.set('view engine', 'hbs')
// 拼接路径
app.set('views', path.join(__dirname, 'views'))

getHomeData()


app.get('/', (req, res, next) => {
  console.log('home')
  res.render('home', data)
})

function getHomeData(){
  const query = 'select * from blogs'
  return checkSql(query).then(res => {
    data.list = res
  })
 
}

module.exports = app
