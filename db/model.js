const db = require("./conf")
const mongoose = require("mongoose")
const blogsSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String }
});
let blogsModel = db.model('blogs', blogsSchema);

const usersSchema = new mongoose.Schema({
  account: { type: String },
  password: { type: String }
});
let usersModel = db.model('users', usersSchema);

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

// usersModel.create({
//   account: 'admin',
//   password: '123456'
// }, (err, res)=>{
//   if(err){
//     console.log('error: ', err)
//   }else{
//     console.log('res: ', res)
//   }
// })

module.exports = {
  blogsModel,
  usersModel
}
