import {getConnection} from "typeorm";
import {Request, Response} from "express";
import {Company} from '../entity/Company'

class DeleteCompany {
    async deleteCompany(req: Request, resp: Response) {

        try {
            await getConnection()
                .createQueryBuilder()
                .delete()
                .from(Company)
                .where("id = :id", {id: req.body.id})
                .execute();
            return resp.json("Delete done");

        } catch (e) {
            return resp.status(400).send({error: 'Delete failed'})
        }
    }
}

export default new DeleteCompany()