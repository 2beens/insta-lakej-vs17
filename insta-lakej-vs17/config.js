"use strict";
var Config = (function () {
    function Config() {
    }
    Config.getUserMediaApiEndpoint = function (userId, accessToken) {
        return "https://api.instagram.com/v1/users/" + userId + "/media/recent/?access_token=" + accessToken;
    };
    return Config;
}());
Config.clientId = 'b4f6b81ffabf4794b200f67ee4e13eea';
Config.clientSecret = '972dbe27e80747f28f3bf69ac37d9393';
Config.grantType = 'authorization_code';
Config.redirectUri = 'http://localhost:8080/auth-return';
Config.instagramApiEndpoint = 'https://api.instagram.com/oauth/access_token';
Config.accessTokenCookieName = 'instapiAccToken';
Config.cookieExpiryTimeSpan = (1000 * 60) * 120; //60 minutes * 120 = 2 hours    
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Config;
//# sourceMappingURL=config.js.map