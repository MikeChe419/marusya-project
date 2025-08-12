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
        return axios.post(`${this._baseURL}auth/login`, {email, password})  
    }

    signUp(email:string, password: string, name: string, surname: string) {
        return axios.post(`${this._baseURL}user`, {email, password, name, surname})
    }

    profile() {
        return axios.get(`${this._baseURL}profile`)
    }
    favorites() {
        return axios.get(`${this._baseURL}favorites`)
    }
    setFavorite(id: number) {
        return axios.post(`${this._baseURL}favorites`, {id})  
    }

    delFavorite(id: number) {
        return axios.delete(`${this._baseURL}favorites/${id}`)  
    }

    getMovies() {
        return axios.get(`${this._baseURL}movie`)
    }

    moviesTop () {
        return axios.get(`${this._baseURL}movie/top10`)  
    }

    getMovie(id: number) {
        return axios.get(`${this._baseURL}movie/${id}`)  
    }
    getGenres() {
        return axios.get(`${this._baseURL}movie/genres`)
    }

    getRandomMovie() {
        return axios.get(`${this._baseURL}movie/random`)
    }

}

const api = new Api()

export default api