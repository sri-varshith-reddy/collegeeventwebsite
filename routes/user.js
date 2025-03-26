const express=require("express");
const { register } = require("../models/listing");
const User = require("../models/user");
const passport=require("passport"); 
const wrapAsync = require("../utils/wrapAsync.js");

const router = express.Router({ mergeParams: true }); 

router.get("/signup",(req,res)=>{
    res.render('users/signup'); 
})



router.post("/signup",wrapAsync(async(req,res)=>{
    try{
    let {username,email,password}=req.body; 
    const newUser=new User({email,username}); 
    const registerUser=await User.register(newUser,password); 
    console.log(registerUser);  
    req.login(registerUser,(err)=>{
        if(err){
            next(err); 
        } 
        req.flash("success","user was registered"); 
        res.redirect("/listing");
    })
    req.flash("success","user was registered"); 
    res.redirect("/listing");
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
})) 


router.get("/login",(req,res)=>{
    res.render("users/login");   
})

router.post("/login",
    passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true 
    }),
    async(req,res)=>{
        req.flash("Welcome back"); 
        res.redirect("/listing");
    }
)

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err); 
        }
        else{
            req.flash("success","logged out "); 
            res.redirect("/listing")
        }
    })
})


module.exports=router; 