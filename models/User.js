
const mongoose = require('mongoose')

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
      match: [/^ [\w -\.] + @([\w -] +\.) + [\w -]{ 2, 4}$/],
      unique: true
   },
   password: {
      type: String,
      required: [true, 'Please Provide Password'],
      minLength: 5,
      maxLength: 12
   }
})

module.exports = mongoose.model('User', userSchema)