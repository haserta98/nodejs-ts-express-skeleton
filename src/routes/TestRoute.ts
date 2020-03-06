import {Router} from "express";
import TestController from '../controller/TestController';


export default class TestRoutes {
  public router: Router;

  public testController: TestController = new TestController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes = () => {
    this.router.get('/insert', this.testController.insert);
    //this.router.get('/get',auth, this.testController.insert);
  }
}
