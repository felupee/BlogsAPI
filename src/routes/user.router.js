const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');
const authToken = require('../middlewares/authToken');
const { schemaUser } = require('../schemas/schemasJoi');
const { validateJoi } = require('../middlewares/validateJoi');

const userRouter = express.Router();

userRouter.post('/user', validateJoi(schemaUser), rescue(userController.createUser));
userRouter.get('/user', rescue(authToken), rescue(userController.getAll));
userRouter.get('/user/:id', rescue(authToken), rescue(userController.getById));

module.exports = userRouter;