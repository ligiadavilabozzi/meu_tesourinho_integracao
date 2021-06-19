export default function authHeader () {
    const user = json.parse (localStorage.getItem ('user'));
    if (user && user.accessToken) {
        return {'x-access-token': user.accessToken};
    } else {
        return {};
    }
}

