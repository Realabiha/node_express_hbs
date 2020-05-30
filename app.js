require("dotenv").config()
const express = require("express")
const hbs = require("hbs")
const path = require("path")
const fs = require("fs")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const cors = require("cors")
// const checkSql = require("./db/sql")
let data = {}

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())

// router
const indexRouter = require('./routes/index')
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

// 使用hbs模板引擎并修改后缀为html
app.set('view engine', 'html')
app.engine('html', hbs.__express);
// 拼接路径
app.set('views', path.join(__dirname, 'views'))

// middleware
app.use('/', indexRouter)
app.use('/api/user', userRouter)
app.use('/api/blog', blogRouter)
app.use((req, res, next) => {
  res.render('404', {title: 404})
})

module.exports = app
