import express from "express";

const app = express();

const port = 3000;

// Middlewares
app.use(express.json());

//connections and listeners
app.listen(port,()=>{
   console.log(`listening on ${port}`);
})