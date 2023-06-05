

const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
   company: {
      type: String,
      required: [true, 'Please provide company'],
      maxLength: 50
   },
   positon: {
      type: String,
      required: [true, 'Please provide position'],
      maxLength: 100
   },
   status: {
      type: String,
      enum: [interview, placed, pending],
      default: pending
   },
   createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],

   }
},
{ timestamps: true }
)
 
module.exports = mongoose.model('Job', jobSchema)