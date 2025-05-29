export interface Product {
    id : number
    name : string;
    description? : string;
    image : string | undefined;
    price : number;
    artisteId : number;
    artistFullName? : string;
    category : string;
    createdAt : string;
    available? : boolean;
}
