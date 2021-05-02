import {getConnection} from "typeorm";
import {Request, Response} from "express";
import {Company} from '../entity/Company'

class SelectAllCompany {
    async selectAllCompany(req: Request, resp: Response) {

        try {
            const companyAll = await getConnection()
                .getRepository(Company)
                .find()


            return resp.json(companyAll);
        } catch (e) {
            return resp.status(400).send({error: 'selectAll failed'})
        }

    }
}

export default new SelectAllCompany();