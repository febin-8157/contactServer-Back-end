const express = require ('express')
const userController =require('../controllers/userController')
const { taskController } = require('../controllers/taskController')
const router =new express.Router()

// register : post request to:http://localhost:3000/register
router.post('/register',userController.registerController)


// login : post request to:http://localhost:3000/login
router.post('/login',userController.loginController)

// addtask : post request to:http://localhost:3000/addtask
router.post('/addtask',taskController.addtaskController)

module.exports=router
