export enum RouteEnum {
    root = '/',
    home = '/home',
    genres ='/genres',
    genre = '/genre',
    film = '/film',
    login = '/login',
    registration = '/registration',
    office = '/office'
}

export type RouteEnumKeysType = keyof typeof RouteEnum