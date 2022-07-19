const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { JSONRPCServer } = require("json-rpc-2.0");

const forms = require('./controllers/forms')
const answers = require('./controllers/answers')

const server = new JSONRPCServer();

server.addMethod("getAll", ({form}) => forms.getAll(form));
server.addMethod("getById", ({form, id}) => forms.getById(id, form));
server.addMethod("createForm", ({form}) => forms.create(form));

server.addMethod("getByFormId", ({id, answer}) => answers.getByFormId(id, answer));
server.addMethod("saveAnswer", ({answer}) => answers.saveAnswer(answer));

const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.post("/api", (req, res) => {
    const jsonRPCRequest = req.body;
    server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
        if (jsonRPCResponse) {
            res.json(jsonRPCResponse);
        } else {
            res.status(204);
        }
    });
});

module.exports = app