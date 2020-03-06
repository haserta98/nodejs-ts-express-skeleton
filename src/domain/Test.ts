export default class Test {

  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  public getUserName(): string {
    return this.username;
  }

}
