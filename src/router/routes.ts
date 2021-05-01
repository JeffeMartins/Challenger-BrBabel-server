import { Router } from 'express';
// const NotifiasGlobo = require('../controller/NoticiasGlobo');
// const InsertNoticia = require('../controller/InsertNoticia');
import Auth from '../controller/Auth';
// const verifyJWT = require('../middlewares/auth')
const routes = Router();

routes.post('/authorization/api', Auth.index)
// routes.get('/noticias', verifyJWT, NotifiasGlobo.index);
// routes.post('/insert/noticia', InsertNoticia.index);

export default routes;
