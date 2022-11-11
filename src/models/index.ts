export interface UserData {
    name: string;
    email: string;
    password: string;
}

export interface RegUserData extends UserData {
    id: string,
}