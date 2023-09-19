const express = require('express')
const router = express.Router()
const { sendMessage } = require('../service/chatGPT')

router.post('/send-message', (req, res) => sendMessage(req, res))


module.exports = router;