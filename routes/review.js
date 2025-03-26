const express=require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ListingSchema = require("../schema.js");
const ReviewSchema = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js")
const Listing = require("../models/listing.js"); 
const Review=require("../models/review.js");    

let ValidateReview=(req,res,next)=>{
    let {error}=ReviewSchema.validate(req.body); 
    if(error){
        throw new ExpressError(400,error)
    }   
    else{
        next(); 
    }
}; 
router.post("/", ValidateReview, wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review); 
    listing.reviews.push(newReview); 
    await newReview.save(); 
    await listing.save();
    console.log("review saved successfully");
    req.flash("success","New review created")
    res.redirect(`/listing/${listing._id}`);
}));


//delete review route
router.delete("/:reviewid", wrapAsync(async (req, res) => {
    let { id, reviewid } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } , new: true });
    await Review.findByIdAndDelete(reviewid);
    res.redirect(`/listing/${id}`);
    req.flash("success","review Deleted ")
}));
module.exports=router; 