const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy=require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.get('/data',async(request,response)=>{
    try{
        const signUpTemplateCopys=await signUpTemplateCopy.find()
        response.json(signUpTemplateCopys) 
        console.log('Data Display Successfully')
    }
    catch(err){
        response.json({message:err})
    }

})

router.get('/get/:Id',async(req,res)=>{
    try{
        //console.log(req.params.postId)
       const signUpTemplateCopys=await signUpTemplateCopy.findById(req.params.Id)//cz makes time
       res.json(signUpTemplateCopys) 
       console.log('Data Display by ID Successfully')        
    }catch(err){
        res.json({message:err})
    }
})

router.post('/signup',async(request,response)=>{
    //response.send('send')
    const saltPassword=await bcrypt.genSalt(10)
    const securePassword=await bcrypt.hash(request.body.passWord,saltPassword)
    const signedUpUser=new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        passWord:securePassword
        
    })
    signedUpUser.save().then(data =>{
        response.json(data)
        console.log('Data Inserted Successfully')
    })
    .catch(error =>{
        response.json(error)
    })
})

router.patch('/update/:Id',async(req,res)=>{
    try{
        //console.log(req.params.Id)
        const signUpTemplateCopys=await signUpTemplateCopy.updateOne(
            {_id: req.params.Id},{$set: {fullName: req.body.fullName}})
        res.json(signUpTemplateCopys)
        console.log(signUpTemplateCopys)
       console.log('Data Updated Successfully')
    }catch(err){
        res.json({message:err})
    }
})


router.delete('/delete/:Id',async(req,res)=>{
    try{
       // console.log(req.params.Id)
        const signUpTemplateCopys=await signUpTemplateCopy.deleteOne({_id: req.params.Id})
        res.json(signUpTemplateCopys)
        console.log('Data Deleted Successfully')

    }catch(err){
        res.json({message:err})
    }
})

router.post('/login',(req,res)=>{
const user =  req.body.userName;
const pass = req.body.passWord;
signUpTemplateCopy.findOne({userName:user},function(err,foundUser){
    if(!err) {
        if (foundUser) {
         if (foundUser.passWord==pass){ //password matches
               res.send('Login sucessfully')
               console.log('Login sucessfully');
           }else{
             res.send('Wrong Password')
             console.log('Wrong Password');

           }
      //---end checking password compraison
        } else {
            res.send("Wrong Username")
            console.log('Wrong Username');
        }
    } else {
        res.send(err);
    }
})
})

module.exports = router