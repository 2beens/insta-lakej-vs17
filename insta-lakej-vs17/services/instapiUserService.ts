import request = require('request');

import config from "../config";

export class InstagramApiUserService {

    public static getUserPhotos(userId: string, accessToken: string, callback: (res: Array<string>) => void) {
        let userPhotos = new Array<string>(20);
        if (userId === null || userId === undefined || userId.length === 0) {
            callback(userPhotos);
        }

        let userMediaEndpoint = config.getUserMediaApiEndpoint(userId, accessToken);

        const req = {
            url: userMediaEndpoint,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        request(req,
            (error: any, response: any, body: any) => {
                //let bodyJson = JSON.parse(body);
                console.log("response => " + body);
                callback(new Array<string>());
            });
    }

}