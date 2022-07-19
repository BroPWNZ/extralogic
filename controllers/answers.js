const Answer = require('../models/answer')

module.exports.saveAnswer = async function (answer) {

    answer = await new Answer({
        formId: answer.formId,
        answer: answer.answer
    }).save()
    return answer
}

module.exports.getByFormId = async function (id, answer) {
    answer = await Answer.find({formId: id})
    return answer
}

