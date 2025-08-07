import axios from "axios";

// export default axios.create({
//     baseURL: 'https://cinemaguide.skillbox.cc/'
// })

class Api {
    private _baseURL: string;
    private _headers: { [key: string]: string };
    constructor() {
        this._baseURL =  'https://cinemaguide.skillbox.cc/',
        this._headers = {
            'content-type': 'application/json'
        }
    }

    signIn(login:string, password: string) {
        return axios.post(`${this._baseURL}auth/login`, {login, password})  
    }

    signUp(email:string, password: string, name: string, surname: string) {
        return axios.post(`${this._baseURL}user`, {email, password, name, surname})
    }

    movie() {
        return axios.get(`${this._baseURL}movie`)
    }
}

const api = new Api()

export default api