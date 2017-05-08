"use strict";
var request = require("request");
var config_1 = require("../config");
var InstagramApiUserService = (function () {
    function InstagramApiUserService() {
    }
    InstagramApiUserService.getUserPhotos = function (userId, accessToken, callback) {
        var userPhotos = new Array(20);
        if (userId === null || userId === undefined || userId.length === 0) {
            callback(userPhotos);
        }
        var userMediaEndpoint = config_1.default.getUserMediaApiEndpoint(userId, accessToken);
        var req = {
            url: userMediaEndpoint,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        request(req, function (error, response, body) {
            //let bodyJson = JSON.parse(body);
            console.log("response => " + body);
            callback(new Array());
        });
    };
    return InstagramApiUserService;
}());
exports.InstagramApiUserService = InstagramApiUserService;
//# sourceMappingURL=instapiUserService.js.map