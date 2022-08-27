import express, { Router,Request, Response} from 'express';


export const roomRouter:Router = express.Router();

roomRouter.get('/',(req:Request,res:Response)=>{
    res.send("Send form router")
})
roomRouter.post('/',(req:Request,res:Response)=>{
    res.send(`Post form router ${req.body}`)
})


