const express=require('express');
const axios=require('axios');
const app=express();

class Block{
    constructor(timestamp,blockReward){
        this.timestamp=timestamp;
        this.blockReward=blockReward;
    }
}

app.listen(3000,()=>{
    console.log("server is running");
})