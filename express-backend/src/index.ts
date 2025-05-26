import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post('/submit', async (req, res)=>{
    const {problemId, userId, code, language} = req.body;
    //submissions being the name of the queue
    try{
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}))
        res.json({
        message: "submitted"
    })
    }catch(error){
        res.json({
            error
        })
    }
})

app.listen(3000)