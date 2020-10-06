export class HomeContent {
    id: number;
    heading: string;
    subheading: string;
    description: string;
    imageUrl: string;

    //constructor
    constructor(id, heading, subheading, description = '', imageUrl = 'https://mulder-onions.com/wp-content/uploads/2017/02/White-square.jpg'){
        this.id = id
        this.heading = heading
        this.subheading = subheading
        this.description = description
        this.imageUrl = imageUrl
    }

}
