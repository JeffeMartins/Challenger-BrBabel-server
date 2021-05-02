import {getConnection} from "typeorm";
import {Request, Response} from "express";
import {Company} from '../entity/Company'

class InsertCompany {
    async newCompany(req: Request, resp: Response) {

        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Company)
                .values(req.body)
                .execute();

            return resp.json({menssage: "insert done"});
        } catch (e) {
            return resp.status(400).send({error: 'Insert failed'})
        }

    }
}

export default new InsertCompany();