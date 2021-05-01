import jwt from 'jsonwebtoken'
import authConfig from './../config/auth.json'
import {Request, Response} from "express";

class Auth {

    public async index(req: Request, resp: Response): Promise<Response> {

        try {
            if (req.body.user == authConfig.user && req.body.password == authConfig.password) {
                const token = jwt.sign({user: req.body.user, password: req.body.password}, authConfig.secret, {
                    expiresIn: 86400,
                })

                return resp.json({createToken: 'ok', token: token})
            } else {
                return resp.status(400).send({error: 'fails authentication'})
            }


        } catch (e) {
            return resp.status(400).send({error: 'web token failed'})
        }
    }
}

export default new Auth()