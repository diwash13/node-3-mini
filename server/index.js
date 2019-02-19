const express = require('express')
require('dotenv').config()
const {json} = require('body-parser')
const app = express()
const ctrl = require ('./messagesCtrl')
const session = require ('express-session')
const {SESSION_SECRET, SERVER_PORT} = process.env

app.use(json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.get('/api/messages', ctrl.getAllMessages)
app.post('/api/messages', ctrl.createMessage)
app.get('/api/messages/history', ctrl.history)

const PORT = process.env.SERVER_PORT || 3005
app.listen(PORT, () => console.log('Sweeettt'))