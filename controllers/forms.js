const Form = require('../models/Form')

module.exports.create = async function (form) {
            form = await new Form({
            name: form.title,
            description: form.description,
            questions: form.questions
        }).save()
    console.log(form)
    return form
}
module.exports.getAll = async function (forms) {
    forms = await Form.find({}, {_id: true, name: true, description: true})
    return forms
}

module.exports.getById = async function (id, form) {
    form = await Form.findOne({_id: id})
    return form
}

