"use strict";
var request = require("request");
var querystring = require("querystring");
var getAccessTokenResult_1 = require("../models/getAccessTokenResult");
var config_1 = require("../config");
var InstagramApiAuthService = (function () {
    function InstagramApiAuthService() {
    }
    InstagramApiAuthService.getAccessToken = function (authCode, callback) {
        var form = {
            client_id: config_1.default.clientId,
            client_secret: config_1.default.clientSecret,
            grant_type: config_1.default.grantType,
            redirect_uri: config_1.default.redirectUri,
            code: authCode,
            scope: 'basic+public_content'
        };
        var formData = querystring.stringify(form);
        var contentLength = formData.length;
        request({
            headers: {
                'Content-Length': contentLength,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri: config_1.default.instagramApiEndpoint,
            body: formData,
            method: 'POST'
        }, function (error, response, body) {
            var bodyJson = JSON.parse(body);
            if (!error && response.statusCode === 200) {
                if (bodyJson.access_token !== null && bodyJson.access_token !== undefined) {
                    callback(new getAccessTokenResult_1.GetAccessTokenResult(bodyJson.access_token, true, "success"));
                }
            }
            else {
                var resultMessage = 'Error during auth.';
                if (bodyJson.error_message !== null)
                    resultMessage += ' ' + bodyJson.error_message;
                callback(new getAccessTokenResult_1.GetAccessTokenResult("", false, resultMessage));
            }
        });
    };
    return InstagramApiAuthService;
}());
exports.InstagramApiAuthService = InstagramApiAuthService;
//# sourceMappingURL=instapiAuthService.js.map