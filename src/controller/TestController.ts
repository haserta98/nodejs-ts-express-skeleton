import {Request, Response} from 'express';
import {HandleResponse} from '../helpers/General';
import TestRepository from "../repository/TestRepository";

export default class TestController {
  public constructor() {

  }

  public insert = async (req: Request, res: Response) => {
    HandleResponse(TestRepository.getInstance().insert(req.body), res);
  };

  public get = async(req:Request, res:Response) =>{
    //req.verify

  }

}

