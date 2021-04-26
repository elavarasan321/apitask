import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    id:{
        type:Number,
        max:10,
        required:true
    },
    itemname:{
        type:String,
        max:255,
        required:true
    },
    price:{
        type:String,
        max:255,
        required:true
    },
    description:{
        type:String,
        max:255,
        required:true
    }
});

const Items = mongoose.model("items",itemSchema);

export default Items;