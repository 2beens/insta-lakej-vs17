/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

import { GetAccessTokenResult } from "../models/getAccessTokenResult";
import { InstagramApiService } from "../services/instapiService";

router.get('/',
    (req: express.Request, res: express.Response) => {
        //req.cookies;
        res.render('index', { title: 'Express', message: null });
    });

router.get('/auth-return',
    (req: express.Request, res: express.Response) => {
        if (req.query.error !== null && req.query.error !== undefined) {
            res.render('index', { title: 'Express - Returned', message: req.query.error_description });
            return;
        } else if (req.query.code === null && req.query.code === undefined) {
            res.render('index', { title: 'Express - Returned', message: 'Unknown error!' });
            return;
        }

        let authCode = req.query.code;
        InstagramApiService.getAccessToken(authCode,
            (getAccessTokenResult: GetAccessTokenResult) => {
                let resultMessage = getAccessTokenResult.message;
                if (getAccessTokenResult.result) {
                    resultMessage += ', AT = ' + getAccessTokenResult.accessToken;
                }

                res.render('index', { title: 'Express - Returned', message: resultMessage });
            });
    });

export default router;