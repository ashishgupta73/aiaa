const fs = require("fs")
require("dotenv").config
const express = require("express")

const app = express()

app.get("/data",async(req,res)=>{
    
        fs.readFile('data.json', 'utf8',(err,data)=>{

            if(err){
                return res.status(500).json({
                    message:`SomeThing IS WRONG ${err}`
                })
            }

            const users = JSON.parse(data);
            const result = users.find(item => item.id == 2);
            if(!result){
                return res.status(401).json({
                    msg:"Id not found"
                })
            }
            res.json(users);
        });
    

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})