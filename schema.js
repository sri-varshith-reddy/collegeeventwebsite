const Joi=require("joi"); 
const Listing = require("./models/listing");
const ListingSchema=Joi.object(
    {
        new : Joi.object({
            title:Joi.string().required(), 
            description:Joi.string().required(), 
            country:Joi.string().required(),
            location:Joi.string().required(), 
            image: Joi.object({
                url: Joi.string().uri().required()
              }).required(), 
            price:Joi.number().required().min(0)


        }).required()
    }
)   
module.exports=ListingSchema

const ReviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5), 
        comment:Joi.string().required()
    }).required()
})
module.exports= ReviewSchema