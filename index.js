const express= require('express')
const cors= require('cors')
// used to load content of .env file into process.env
require ('dotenv').config()
const router=require('./routes/router')
require('./dbConnections/connection')
const taskManagerServer =express()
taskManagerServer.use(cors())
taskManagerServer.use(express.json())
taskManagerServer.use(router)

const PORT =3000 || Process.env.PORT

taskManagerServer.listen(PORT,()=>{
    console.log(`Task Manager Server started at port :${PORT} and waiting for the client request`);
    
})

// resolving client/browser request (GET,POST,PUT,DELETE) using express
// resolving get request to http://localhost:3000/
taskManagerServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;"> Task server started and waiting for client request!!!</h1>`)
})
taskManagerServer.post('/',(req,res)=>{
    res.status(200).send(`post server`)
})
