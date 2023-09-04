import mongoose from "mongoose";

const bookSchemas=mongoose.Schema(
    {
        "title":{
            type:String,
            required:true
        },
        "author":{
            type:String,
            required:true
        },
        "publishyear":{
            type:Number,
            required:true
        }
    },
    {
        timestamp:true
    }
);

export const Book=mongoose.model('bookSchemas',{name:String});

