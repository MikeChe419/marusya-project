export type RootStateType = {
    profile: ProfileStateType | null;
}

export type ProfileStateType = {
    favourites: string[],
    surname: string,
    name: string,
    email: string,
}
