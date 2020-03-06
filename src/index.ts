import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';

import compression from 'compression';

import TestRoutes from './routes/TestRoute';


import mongoose from "mongoose";
import "./helpers/config";

class Server{
  public app:express.Application;
  private uri: string = "mongodb://127.0.0.1:27017/test";

  constructor(){
    try{
    process.env.NODE_ENV = "production";
    this.app = express();
    this.config();
    this.makeRoutes();
    this.connectMongodb();
    }catch (e) {
      console.log(e);
    }
    //this.startCron();
  }

  private config():any{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(hpp());
    this.app.use(morgan('dev'));
  }

  private makeRoutes():any{
    this.app.get('/', (req, res) => res.send("a"));
    this.app.use('/api/test',new TestRoutes().router);
  }

  private connectMongodb():any{
    mongoose.connect(this.uri,{useFindAndModify:false, useUnifiedTopology:true, useNewUrlParser:true},(err:any)=>{
      if(err)
        console.log(err.message);
      else
        console.log("mongodb connected");
    });
  }

  public start():any{
    this.app.listen(process.env.PORT || 3000, ()=>{
      console.log("Server started localhost:"+process.env.PORT || 3000);
    });
  }

}

const _app:Server = new Server();
_app.start();

