"use strict";
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
var config_1 = require("../config");
var instapiAuthService_1 = require("../services/instapiAuthService");
router.get('/', function (req, res) {
    var message = "Access token set in cookies = ";
    var accTokenTaken = false;
    var accTokenCookie = req.cookies[config_1.default.accessTokenCookieName];
    if (accTokenCookie !== undefined) {
        message += accTokenCookie;
        accTokenTaken = true;
    }
    else
        message += "false";
    res.render('index', { title: 'Insta Lakej', message: message, accTokenTaken: accTokenTaken, accTokenCookie: accTokenCookie });
});
router.get('/auth-return', function (req, res) {
    if (req.query.error !== null && req.query.error !== undefined) {
        res.render('index', { title: 'Express - Returned', message: req.query.error_description });
        return;
    }
    else if (req.query.code === null && req.query.code === undefined) {
        res.render('index', { title: 'Express - Returned', message: 'Unknown error!' });
        return;
    }
    var authCode = req.query.code;
    instapiAuthService_1.InstagramApiAuthService.getAccessToken(authCode, function (getAccessTokenResult) {
        if (getAccessTokenResult.result) {
            res.cookie(config_1.default.accessTokenCookieName, getAccessTokenResult.accessToken, { expires: new Date(Date.now() + config_1.default.cookieExpiryTimeSpan), httpOnly: false });
        }
        res.redirect('/');
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map