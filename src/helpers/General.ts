import {Response} from 'express';

export const HandleResponse = (response: Promise<any>, res: Response) => {
  response.then(resp => {
    res.status(200).json({status: true, message: resp});
  }).catch(error => {
    res.status(200).json({status: false, message: error});
  });
};

export const HandleErrorResponse = (message: string, res: Response) => {
  res.status(200).json({status: false, message});
};
