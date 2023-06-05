const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please provide name'],
      minLength: 3,
      maxLength: 20
   },
   email: {
      type: String,
      required: [true, 'Please provide email'],
      match: [
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         'please provide valid email'],
      unique: true
   },
   password: {
      type: String,
      required: [true, 'Please Provide Password'],
      minLength: 5,
      maxLength: 12
   }
})


userSchema.pre('save', async function () {
   const saltRounds = 10
   this.password = await bcrypt.hash(this.password, saltRounds)
})



userSchema.methods.createJWT = function () {
   return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT, { expiresIn: '30d' })
}



userSchema.methods.comparePassword = async function (password) {
   const isMatch = bcrypt.compare(password, this.password)
   return isMatch
}


module.exports = mongoose.model('User', userSchema)