import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send("Instagram API test resource");
});

router.get('/photos', (req: express.Request, res: express.Response) => {
    let username = req.query.username;
    res.send("Instagram API test resource. Username = " + username);
});

export default router;