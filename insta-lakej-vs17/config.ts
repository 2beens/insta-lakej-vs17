export default class Config {
    public static clientId = 'b4f6b81ffabf4794b200f67ee4e13eea';
    public static clientSecret = '972dbe27e80747f28f3bf69ac37d9393';
    public static grantType = 'authorization_code';
    public static redirectUri = 'http://localhost:8080/auth-return';
    public static instagramApiEndpoint = 'https://api.instagram.com/oauth/access_token';

    public static accessTokenCookieName = 'instapiAccToken';
    public static cookieExpiryTimeSpan = (1000 * 60) * 120;     //60 minutes * 120 = 2 hours
}