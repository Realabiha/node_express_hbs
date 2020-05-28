const app = require("../app")
const env = process.env.NODE_ENV;
const port = process.env.PORT


app.listen(port, serverRunning)

function serverRunning(){
  console.log('serer running >-<')
}