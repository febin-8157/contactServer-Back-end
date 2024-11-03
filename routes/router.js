const express = require ('express')
const userController =require('../controllers/userController')
const router =new express.Router()

// register : post request to:http://localhost:3000/register
router.post('/register',userController.registerController)

module.exports=router
