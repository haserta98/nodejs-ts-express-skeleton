import jwt from 'jsonwebtoken';

export default (req:any, res:any, next:any) =>{
  try{
    const token = req.headers.authorization.split(" ")[1];
    req.verify = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }catch(error){
    return res.status(401).send({message: "Auth failed !"});
  }
}
