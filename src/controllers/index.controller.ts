import { Request, Response } from "express";

export default class IndexController{

    static welcome(req: Request, res: Response): Response{
        return res.json("Welcome to my API!");
    }
    
}