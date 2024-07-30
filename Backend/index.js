import express from "express";


const app = express();

const port = 3000;

// Middlewares
app.use(express.json());

app.get('/', (req, res)=>{
   res.send("Hello World");
})

//connections and listeners
app.listen(port,()=>{
   console.log(`listening on ${port}`);
})