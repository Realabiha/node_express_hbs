const env = process.env.NODE_ENV
let SQL_CONF

console.log(env, 'env')

if(env === 'dev'){
  SQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'XY1416567924mysql',
    port: '3306',
    database: 'myblog'
  }
}
if(env === 'production'){
  SQL_CONF = {
    host: '54.152.6.249',
    user: 'root',
    password: 'XY1416567924mysql',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = SQL_CONF