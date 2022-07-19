const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  questions: [
    {
      name: {
        type: String
      },
      type: {
        type: Number
      },
      description: {
        type: String
      },
      selectItems: [
         {value: String}
      ]
    }
  ]
})

module.exports = mongoose.model('forms', formSchema)