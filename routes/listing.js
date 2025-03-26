    const express=require("express"); 
    const wrapAsync = require("../utils/wrapAsync.js")
    const ListingSchema = require("../schema.js");
    const ExpressError = require("../utils/ExpressError.js")
    const Listing = require("../models/listing.js");
    const NewSchema=require("../schema.js"); 
    const loggedin=require("../middleware.js");


    const router=express.Router();


    let validatelisting=(req,res,next)=>{
        let {error}=NewSchema.validate(req.body); 
        if(error){
            throw new ExpressError(400,error)
        }
        else{
            next(); 
        }
    }; 
    //index
    router.get("/", wrapAsync(async (req, res) => {
        const list = await Listing.find({})
        res.render("listings/index.ejs", { list })
    }))
    //new 
    router.get("/new", loggedin, wrapAsync(async (req, res) => {
        
        res.render("listings/new.ejs");
    }))
    //create
    router.post("/", validatelisting,loggedin,wrapAsync(async (req, res) => {
        const list = new Listing(req.body.new);
        await list.save(); 
        req.flash("success","New listing created")
        res.redirect("/listing");
    }));
    //show
    router.get("/:id", wrapAsync(async (req, res) => {
        const { id } = req.params; 
        let item = await Listing.findById(id).populate("reviews");  
        if(!item){
            req.flash("error","does not exist"); 
            return res.redirect("/listing"); 
        }
        res.render("listings/show.ejs", { item })
    }))
    //edit 
    router.get("/:id/edit",loggedin, wrapAsync(async (req, res) => {
        const { id } = req.params; 
        let item = await Listing.findById(id);
        res.render("listings/edit.ejs", { item })  

    }))
    //update 
    router.put("/:id", validatelisting,loggedin,wrapAsync(async (req, res) => {
        if(!req.body.new){
            throw new ExpressError(400,"Send valid data for listing")
        } 
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.new });
        req.flash("success","listing updated")
        res.redirect("/listing");
    }));
    //delete
    router.delete("/:id", loggedin, wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success","listing deleted")
        res.redirect("/listing");
    }));

    module.exports=router; 