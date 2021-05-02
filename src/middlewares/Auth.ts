import * as jwt from 'jsonwebtoken'
import authConfig from '../config/Config'
import {Response, Request, NextFunction} from "express";

class Authenticate {
    public async authToken(req: Request, resp: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if (!token) return resp.status(401).send({error: 'token not found'})

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) return resp.status(401).send({error: 'access denied invalid token'})
            next();
        })
    }
}

export default new Authenticate()
