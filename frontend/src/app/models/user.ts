export class User {
    name: string;
    email: string;
    password: string;
    phone: number;
    address: string;
    subscribe: boolean;

    //constructor
    constructor(name, email, password, phone, address,subscribe){
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.address = address
        this.subscribe = subscribe
    }

}