/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

import config from "../config";

import { GetAccessTokenResult } from "../models/getAccessTokenResult";
import { InstagramApiService } from "../services/instapiService";

router.get('/',
    (req: express.Request, res: express.Response) => {
        let message = "Access token set in cookies = ";
        let accTokenTaken = false;
        let accTokenCookie = req.cookies[config.accessTokenCookieName];
        if (accTokenCookie !== undefined) {
            message += accTokenCookie;
            accTokenTaken = true;
        } else
            message += "false";

        res.render('index', { title: 'Insta Lakej', message: message, accTokenTaken: accTokenTaken, accTokenCookie: accTokenCookie });
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
                if (getAccessTokenResult.result) {
                    res.cookie(config.accessTokenCookieName, getAccessTokenResult.accessToken, { expires: new Date(Date.now() + config.cookieExpiryTimeSpan), httpOnly: false });
                }

                res.redirect('/');
            });
    });

export default router;