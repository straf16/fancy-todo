const { hashPassword } = require('../helpers/bcryptjs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  username: String,
  password: String
})

userSchema.pre('save', function(next) {
  this.password = hashPassword(this.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User