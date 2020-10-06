export class CollectionContent {
    id: number;
    description: string;
    imageUrl: string;

    //constructor
    constructor(id, description = '', imageUrl = 'https://mulder-onions.com/wp-content/uploads/2017/02/White-square.jpg'){
        this.id = id
        this.description = description
        this.imageUrl = imageUrl
    }

}
