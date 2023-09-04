import  express, { response }  from "express";
import { mongoDBURL,port } from "./configg.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
 

const app= express();

app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req);
    return res.status(200).send(`welcome`);
});

app.post("/books",async (request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishyear
        ){
            return response.status(400).send({
                message:"send all fields "
            });
        }
        const newBook={
            title: response.body.title,
            author:response.body.author ,
            publishyear:response.body.publishyear
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);

    } catch (error) {
        console.log(error);
        return response.status(500).send({message: error.message});
    }
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected to DB");
        app.listen(port,()=>{
            console.log(`App is listening to port ${port}`);
        });
    })
    .catch((Error)=>{
        console.log(Error)
    });