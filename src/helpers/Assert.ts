export const notNull = (object: any, message: string): void => {
  isTrue(object == null, message);
};

export const notNullEmpty = (object: any, message: string): void => {
  isTrue(object == null, message);
  notEmpty(object, message);
};

export const notNullBlank = (object: string, message: string): void => {
  notNull(object, message);
  notBlank(object, message);
};

export const notBlank = (string: string, message: string): void => {
  isTrue(string == null || string.trim().length == 0, message);
};

export const notEmpty = (collection: Array<any> | Map<any, any>, message?: string) => {
  const isNull = collection == null;
  const isEmptyArray = (collection instanceof Array && (collection as Array<any>).length == 0);
  const isEmptyMap = (collection instanceof Map && (collection as Map<any, any>).size == 0);
  isTrue(isNull || isEmptyArray || isEmptyMap, message);
};

export const isTrue = (condition: boolean, message?: string): void => {
  if (condition) {
    throwError(message);
  }
};

const throwError = (message?: string): void => {
  if (message != null && message.length != 0) {
    throw new Error(message);
  } else {
    throw new Error();
  }
};



