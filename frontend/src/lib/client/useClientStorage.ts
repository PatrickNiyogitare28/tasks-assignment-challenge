import Cookies from 'js-cookie';

export function handleClientCookie(sessionToken: string) {
    // Set the access token in cookies
    Cookies.set('accessToken', sessionToken, { expires: 7 }); // Set the cookie to expire in 7 days
}