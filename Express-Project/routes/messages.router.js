const express = require('express');
const messageController = require('../controllers/message.controllers');
const messsageRouter = express.Router();

messsageRouter.get('/',messageController.getMessage);

messsageRouter.post('/',messageController.postMessage)
module.exports = messsageRouter;
