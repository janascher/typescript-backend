export interface IAPIResponse<T> {
    data: T;
    errors: Array<string>;
}

export interface IUserData {
    name: string;
    email: string;
    password: string;
}

export interface IRegUserData extends IUserData {
    id: string,
}