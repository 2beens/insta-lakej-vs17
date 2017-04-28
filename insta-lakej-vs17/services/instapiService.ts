import request = require('request');
import querystring = require('querystring');

import { GetAccessTokenResult } from "../models/getAccessTokenResult";
import config from "../config";

export class InstagramApiService {

    public static getAccessToken(authCode: string, callback: (res: GetAccessTokenResult) => void) {
        let form = {
            client_id: config.clientId,
            client_secret: config.clientSecret,
            grant_type: config.grantType,
            redirect_uri: config.redirectUri,
            code: authCode
        };

        var formData = querystring.stringify(form);
        var contentLength = formData.length;

        request({
            headers: {
                'Content-Length': contentLength,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri: config.instagramApiEndpoint,
            body: formData,
            method: 'POST'
        },
        (error: any, response: any, body: any) => {
            let bodyJson = JSON.parse(body);
                
            if (!error && response.statusCode === 200) {
                if (bodyJson.access_token !== null && bodyJson.access_token !== undefined) {
                    callback(new GetAccessTokenResult(bodyJson.access_token, true, "success"));
                }
            } else {
                let resultMessage = 'Error during auth.';
                if (bodyJson.error_message !== null)
                    resultMessage += ' ' + bodyJson.error_message;

                callback(new GetAccessTokenResult("", false, resultMessage));
            }
        });
    }
}