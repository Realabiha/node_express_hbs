const app = require("../app")
const env = process.env.NODE_ENV;
const port = process.env.PORT || 8686


app.listen(port, serverRunning)

function serverRunning(){
  console.log('serer running >-<', port)
}