import {notNull} from "../helpers/Assert";
import JsonSerializer from "./JsonSerializer";
import Test from '../domain/Test';


export default class TestJSONSerializer implements  JsonSerializer<Test>{

  private static instance: TestJSONSerializer;

  private constructor() {
  }

  public static getInstance(): TestJSONSerializer {
    if (!TestJSONSerializer.instance) {
      TestJSONSerializer.instance = new TestJSONSerializer();
    }
    return TestJSONSerializer.instance;
  }

  public deserialize(json: any): Promise<Test> {
    return new Promise<Test>((async (resolve, reject) => {
      try{
        const businessBlock: Test = new Test(json.username);
        notNull(json, "Test cannot be null !");
        resolve(businessBlock);
      }catch(e){
        reject(e);
      }
    }))
  }


  public serialize(object: Test):Promise<any>{
    return new Promise((resolve => {
      resolve({
        username: object.getUserName()
      })
    }));
  }
}
