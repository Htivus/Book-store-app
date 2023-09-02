import  Express  from "express";

const port=5555;

const app= Express();

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
});