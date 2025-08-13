import axios from "axios";

// export default axios.create({
//     baseURL: 'https://cinemaguide.skillbox.cc/'
// })

class Api {
    private _baseURL: string;
    // private _headers: { [key: string]: string };
    constructor() {
        this._baseURL =  'https://cinemaguide.skillbox.cc/'
        // this._headers = {
        //     'content-type': 'application/json'
        // }
    }

    signIn(email:string, password: string) {
        return axios.post(`${this._baseURL}auth/login`, {email, password}, {withCredentials: true})  
    }

    signUp(email:string, password: string, name: string, surname: string) {
        return axios.post(`${this._baseURL}user`, {email, password, name, surname}, {withCredentials: true})
    }

    logout() {
        return axios.get(`${this._baseURL}auth/logout`, {withCredentials: true})
    }

    profile() {
        return axios.get(`${this._baseURL}profile`, {withCredentials: true})
    }
    favorites() {
        return axios.get(`${this._baseURL}favorites`, {withCredentials: true})
    }
    setFavorite(id: number) {
        return axios.post(`${this._baseURL}favorites`, {id}, {withCredentials: true})  
    }

    delFavorite(id: number) {
        return axios.delete(`${this._baseURL}favorites/${id}`, {withCredentials: true})  
    }

    getMovies() {
        return axios.get(`${this._baseURL}movie`, {withCredentials: true})
    }

    moviesTop () {
        return axios.get(`${this._baseURL}movie/top10`, {withCredentials: true})  
    }

    getMovie(id: number) {
        return axios.get(`${this._baseURL}movie/${id}`, {withCredentials: true})  
    }
    getGenres() {
        return axios.get(`${this._baseURL}movie/genres`, {withCredentials: true})
    }

    getRandomMovie() {
        return axios.get(`${this._baseURL}movie/random`, {withCredentials: true})
    }

}

const api = new Api()

export default api