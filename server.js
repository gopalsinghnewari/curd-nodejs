const express = require("express");
const colors = require("colors");
const app = express();
const dotenv = require('dotenv');
const morgan = require("morgan");
const mysqlpool = require("./config/db");
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/student",require("./routes/students-routes"))
app.get("/test",(req,res)=>{
    res.status(200).send("welcome to node js project")
});

const port = process.env.port || 8000;

mysqlpool.query('SELECT 1').then(()=>{
    console.log('db connected');
    
    app.listen(port,() =>{
        console.log(`server running on port ${process.env.port}` );
        
    })
}).catch((eooro)=>{
    console.log('ERROR');
    
})


