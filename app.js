require("dotenv").config()
const express = require("express")
const hbs = require("hbs")
const path = require("path")
const monk = require("monk")
const mongoose = require('mongoose')
const db = require("./db/db")
// const checkSql = require("./db/sql")
let data = {}

const app = express()
app.use(express.json());

// 使用hbs模板引擎
app.set('view engine', 'hbs')
// 拼接路径
app.set('views', path.join(__dirname, 'views'))

const blogsSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String }
});
let blogsModel = db.model('blogs', blogsSchema);

// blogsModel.create({
//   title: 'test',
//   content: 'hell0 mongodb!'
// }, (err, res)=>{
//   if(err){
//     console.log('error: ', err)
//   }else{
//     console.log('res: ', res)
//   }
// })

blogsModel.find((err, res)=>{
  if(err){
    console.log('error: ', err)
  }else{
    console.log('res: ', res)
    data.list = res;
  }
})


app.get('/', (req, res) => {
  console.log(blogsModel, 'home')
  res.render('home', data)
})


module.exports = app
