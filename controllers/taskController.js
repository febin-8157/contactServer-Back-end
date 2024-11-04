const userTask=require('../modals/taskModal')

exports.addtaskController= async(req,res)=>{
    console.log("task controller");
    const{task}=req.body
    console.log(task);
    try{
        const existingtask= await userTask.findOne({task})
        if(existingtask){
            res.status(406).json("task already exist in our database...please add another")
        }else{
            const newTask=new userTask({task            })
            await newTask.save()
            res.status(200).json(newTask)
        }
    }catch(err){
        res.status(401).json(err);

    }
}
