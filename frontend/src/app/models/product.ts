export class Product {
    id: number;
    name: string;
    qty: number;
    description: string;
    price: number;
    imageUrl: string;

    //constructor
    constructor(id, name, description = '', price = 0, qty = 0,imageUrl = 'https://mulder-onions.com/wp-content/uploads/2017/02/White-square.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.qty = qty
        this.imageUrl = imageUrl
    }

}
