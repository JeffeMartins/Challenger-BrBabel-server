import * as jwt from 'jsonwebtoken'
import authConfig from '../config/Config'
import {Response, Request, NextFunction} from "express";

class Authenticate {
    public async authToken(req: Request, resp: Response, next: NextFunction) {
        const header=req.headers.authorization;
        const token=header?.startsWith('Bearer ') ? header.slice(7) : header;

        if (!token) return resp.status(401).send({error: 'token not found'})

        jwt.verify(token, authConfig.secret, {algorithms:['HS256']}, (err, decoded) => {
            if (err) return resp.status(401).send({error: 'access denied invalid token'})
            next();
        })
    }
}

export default new Authenticate()
