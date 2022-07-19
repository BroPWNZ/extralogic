const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerSchema = new Schema({
  formId: {
    ref: 'forms',
    type: Schema.Types.ObjectId
  },
  answer: [{
    input: {
      type: String,
    },
    type: {
      type: Number,
    },
    questionId: {
      type: String,
    }
  }]


})

module.exports = mongoose.model('answer', AnswerSchema)