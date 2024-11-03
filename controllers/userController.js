const users=require('../modals/userModal')

// register/logic
exports.registerController= async(req,res)=>{
    console.log("register controller");
    const{username,email,password}=req.body
    console.log(username,email,password);
    try{
      const existinguser=await users.findOne({email})
      console.log(existinguser);
      if(existinguser){
        res.status(406).send("Account already Exist please login")

      }else{
        // register
        const newUser=new users({
            username,email,password
        })
        await newUser.save()
        res.status(200).json(newUser)

      }
    }catch(err){ 
        res.status(401).json(err)
    }
}