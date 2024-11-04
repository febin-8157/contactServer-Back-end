const mongoose =require('mongoose')

const taskSchema=new mongoose.Schema({
    task:{
        type: String,
        required:true
    }
})

const userTask=mongoose.model("userTask",taskSchema)
module.exports=userTask