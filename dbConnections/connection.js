const mongoose= require('mongoose')

const dbConnection=process.env.CONNECTION_STRING

mongoose.connect(dbConnection).then(res=>{
    console.log("momgodb atlas connected sucessfully with taskmanager server");
    
}).catch(err=>{
    console.log("connection failed");
    console.log(err);
    
})