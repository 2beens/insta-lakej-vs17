import express = require('express');
const router = express.Router();

import config from "../config";

import { InstagramApiUserService } from "../services/instapiUserService";

router.get('/', (req: express.Request, res: express.Response) => {
    res.send("Instagram API test resource");
});

router.get('/photos',
    (req: express.Request, res: express.Response) => {
        let username = req.query.username;
        if (username === undefined) {
            res.status(400);
            res.send("Error. Username missing.");
            return;
        }

        let accTokenCookie = req.cookies[config.accessTokenCookieName];
        if (accTokenCookie === undefined || accTokenCookie === null) {
            res.status(401);
            res.send("Error. Unauthorized.");
            return;
        }

        InstagramApiUserService.getUserPhotos(username,
            accTokenCookie,
            (getUserPhotosResult: string[]) => {
                
            });

        res.send("Instagram API test resource. Username = " + username);
    });

export default router;