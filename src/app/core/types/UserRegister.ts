export class UserInformation {
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    role_id: string;
    address?: string;

    constructor(name: string,
                usern: string, 
                email: string, 
                phone: string, 
                passw: string, 
                role_id: string,
                address?: string) {
                    this.name = name;
                    this.username = usern;
                    this.email = email;
                    this.phone = phone;
                    this.password = passw;
                    this.role_id = role_id;
                    this.address = address;
                }

}