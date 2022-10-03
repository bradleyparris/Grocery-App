import decode from 'jwt-decode';

class AuthService{
    // retrieve data saved in token
    getProfile(){
        return decode(this.getToken());
    }

    // check if user is still logged in
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token){
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000){
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
    getToken(){
        return sessionStorage.getItem('id_token');
    }
    login(idToken) {
        sessionStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout(){
        sessionStorage.removeItem('id_token');

        window.location.assign('/');
    }
}

export default new AuthService();