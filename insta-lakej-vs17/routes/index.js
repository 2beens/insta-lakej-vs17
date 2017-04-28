"use strict";
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
var instapiService_1 = require("../services/instapiService");
router.get('/', function (req, res) {
    //req.cookies;
    res.render('index', { title: 'Express', message: null });
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
    instapiService_1.InstagramApiService.getAccessToken(authCode, function (getAccessTokenResult) {
        var resultMessage = getAccessTokenResult.message;
        if (getAccessTokenResult.result) {
            resultMessage += ', AT = ' + getAccessTokenResult.accessToken;
        }
        res.render('index', { title: 'Express - Returned', message: resultMessage });
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map