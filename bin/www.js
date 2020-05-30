const app = require("../app")
const port = process.env.PORT || 8686


app.listen(port, running)

function running(){
  console.log('serer running >-<', port)
}