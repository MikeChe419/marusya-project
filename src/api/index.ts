import axios from "axios";

// export default axios.create({
//     baseURL: 'https://cinemaguide.skillbox.cc/'
// })

class Api {
    constructor() {
        this._baseURL =  'https://cinemaguide.skillbox.cc/',
        this._headers = {
            'content-type': 'application/json'
        }
    }

    signIn(login, password) {
        return axios.post(`${this._baseURL}auth/login`, {login, password})
       
    }
}

const api = new Api()

export default api