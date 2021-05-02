import * as jwt from 'jsonwebtoken'
import authConfig from "../config/Config";
import {Request, Response} from "express";

class Auth {

    public async authenticate(req: Request, resp: Response): Promise<Response> {


        try {

            if (req.body.user == authConfig.user && req.body.password == authConfig.password) {

                const token = jwt.sign({user: req.body.user, password: req.body.password}, authConfig.secret, {
                    expiresIn: 86400,
                })

                return resp.json({token: token, expires_in: 86400, type: 'jwt'})
            } else {
                return resp.status(400).send({error: 'fails authentication'})
            }


        } catch (e) {
            return resp.status(400).send({error: 'web token failed'})
        }
    }
}

export default new Auth()