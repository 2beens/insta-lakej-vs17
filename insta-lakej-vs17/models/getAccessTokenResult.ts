export class GetAccessTokenResult {
    public accessToken: string;
    public result: boolean;
    public message: string;

    constructor(accessToken: string, result: boolean, message: string) {
        this.accessToken = accessToken;
        this.result = result;
        this.message = message;
    }
}