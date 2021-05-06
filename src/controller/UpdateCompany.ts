import {getConnection} from "typeorm";
import {Request, Response} from "express";
import {Company} from '../entity/Company'

class UpdateCompany {
    async updateCompany(req: Request, resp: Response) {

        try {
            await getConnection()
                .createQueryBuilder()
                .update(Company)
                .set(req.body)
                .where("id = :id", {id: req.params.id})
                .execute();
            return resp.json("Update done");

        } catch (e) {
            return resp.status(400).send({error: 'update failed'})
        }
    }
}

export default new UpdateCompany()