const users=require('../modals/userModal')
const jwt =require('jsonwebtoken')
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

// login
exports.loginController= async(req,res)=>{
console.log("inside login controller");
const{email,password}=req.body
console.log(email,password);
try{
  const existinguser=await users.findOne({email,password})

  console.log(existinguser);
  if(existinguser){
      const token=jwt.sign({userId:existinguser._id},process.env.JWT_PASSWORD)

    res.status(200).json(
      {user:existinguser,token}
      
    )

  }else{
    
    res.status(404).json("invalid email/ password!!")

  }
}
catch(err){
res.status(401).json(err)
}
}