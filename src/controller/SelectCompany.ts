import {getConnection} from "typeorm";
import {Request, Response} from "express";
import {Company} from '../entity/Company'

class SelectCompany {
    async selectCompany(req: Request, resp: Response) {

        try {
            const company = await getConnection()
                .getRepository(Company)
                .createQueryBuilder("company")
                .where("company.id = :id", {id: req.params.id})
                .getOne();


            return resp.json(company);
        } catch (e) {
            return resp.status(400).send({error: 'select failed'})
        }

    }
}

export default new SelectCompany();