import { Category } from "./category.interface";
import { Rating } from "./rating.interface";

export interface Product {
    id : number
    name : string;
    description? : string;
    price : number;
    contactId : number;
    image : string | undefined;
    ratings: Rating[];
    category? : Category;
}
