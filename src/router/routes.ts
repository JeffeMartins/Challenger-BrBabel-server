import {Router} from 'express';
import Auth from '../controller/Auth';
import verifyJWT from '../middlewares/Auth'
import insertCompany from '../controller/InsertCompany'
import updateCompany from '../controller/UpdateCompany'
import deleteCompany from '../controller/DeleteCompany'
import selectAllCompany from '../controller/SelectAllCompany'
import selectOneCompany from '../controller/SelectCompany'

const routes = Router();

routes.post('/authorization/api', Auth.authenticate)
routes.post('/insert/Company', verifyJWT.authToken, insertCompany.newCompany)
routes.put('/update/company', verifyJWT.authToken, updateCompany.updateCompany)
routes.delete('/delete/company', verifyJWT.authToken, deleteCompany.deleteCompany)
routes.get('/select-all/company', verifyJWT.authToken, selectAllCompany.selectAllCompany)
routes.get('/select/company/:id', verifyJWT.authToken, selectOneCompany.selectCompany)


export default routes;
