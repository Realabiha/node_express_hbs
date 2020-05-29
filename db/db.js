const mongoose = require("mongoose");
console.log('dburl: ', process.env.DB_URL, process.env.PORT)
const DB_URL = process.env.DB_URL || "mongodb+srv://admin:1416567924@free-cloud-mdb-axqeh.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
});
mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
});




module.exports = mongoose;