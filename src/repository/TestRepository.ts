import {notNull, notNullEmpty} from "../helpers/Assert";
import TestDomain from '../domain/collections/TestDomain';

export default class TestRepository {

  private static instance: TestRepository = null;

  private constructor() {

  }

  public static getInstance = (): TestRepository => {
    if (TestRepository.instance == null)
      TestRepository.instance = new TestRepository();
    return TestRepository.instance;
  };

  public insert = async (data: any): Promise<any> => {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const {username} = data;
        notNullEmpty(username, "Give all input");
        const test = await new TestDomain({username}).save();
        notNull(test, "An error !");
        resolve(test);
      } catch (e) {
        reject(e);
      }
    });
  };
}
