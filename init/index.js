const mongoose = require("mongoose");
const Listing=require("../models/listing.js");
const Data=require("./data.js");

let mongourl="mongodb://localhost:27017/mydatabase";

main()
.then(()=>{
    console.log("mongo working");
});

async function main(){
    await mongoose.connect(mongourl);
}; 

const initDB=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(Data.data);
    console.log("inserted many");
} 
initDB();
