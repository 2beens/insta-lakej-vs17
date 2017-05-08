"use strict";
var express = require("express");
var router = express.Router();
var config_1 = require("../config");
var instapiUserService_1 = require("../services/instapiUserService");
router.get('/', function (req, res) {
    res.send("Instagram API test resource");
});
router.get('/photos', function (req, res) {
    var username = req.query.username;
    if (username === undefined) {
        res.status(400);
        res.send("Error. Username missing.");
        return;
    }
    var accTokenCookie = req.cookies[config_1.default.accessTokenCookieName];
    if (accTokenCookie === undefined || accTokenCookie === null) {
        res.status(401);
        res.send("Error. Unauthorized.");
        return;
    }
    instapiUserService_1.InstagramApiUserService.getUserPhotos(username, accTokenCookie, function (getUserPhotosResult) {
    });
    res.send("Instagram API test resource. Username = " + username);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=instapi.js.map