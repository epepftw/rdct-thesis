export class UserCredentials {
    username: string;
    password: string;

    constructor(usern: string, passw: string) {
        this.username = usern;
        this.password = passw;
    }
}

export type UsersAuthenticateAPI = {
    success: boolean;
    token: string;
    user: {
        id: string;
        name: string;
        username: string;
        email: string;
    },
    role: {
        _id: string;
        role_name: string;
        role_slug: string;
    } 

}