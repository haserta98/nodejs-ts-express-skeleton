interface JsonSerializer<T> {

  serialize(object: T): Promise<any>;

  deserialize(json: any): Promise<T>
}

export default JsonSerializer;
