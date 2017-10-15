import * as express from 'express';
import { all } from '../procedures/users.proc';


let router = express.Router();

//WORKS
router.get('/', (req, res) => { //actually /api/users/
    all()
    .then((users) => {
        res.send(users);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;