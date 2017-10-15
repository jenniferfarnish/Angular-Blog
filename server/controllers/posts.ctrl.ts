import * as express from 'express';
import * as procedures from '../procedures/posts.proc';

//import { all, read, create, update, destroy } from '../procedures/chirps/proc'; Alternate method

//WORKS
let router = express.Router();

router.route('/') //Actually /api/posts
    .get((req, res) => {
        procedures.all()
        .then((posts) => {
            res.send(posts);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    })

    //WORKS
    .post((req, res) => {
        procedures.create(req.body.title, req.body.userid, req.body.categoryid, req.body.content)
        .then((id) => {
            res.status(201).send(id);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    })

//WORKS
router.route('/:id')
    .get((req, res) => {
        procedures.read(req.params.id)
        .then((post) => {
            res.send(post);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    })
    //WORKS
    .put((req, res) => {
        procedures.update(req.params.id, req.body.title, req.body.content, req.body.categoryid)
        .then(() => {
            res.sendStatus(204);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    })
    //WORKS
    .delete((req, res) => {
        procedures.destroy(req.params.id)
        .then(() => {
            res.sendStatus(204);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    })

export default router;