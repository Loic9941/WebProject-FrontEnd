import { Product } from "../../products/interfaces/product.interface";
import { Rating } from "../../products/interfaces/rating.interface";

export interface InvoiceItem {
    id : number
    quantity : number;
    unitPrice : number;
    productId : number;
    product? : Product;
    createdAt : string;
    deliveredAt? : string;
    name : string;
    status : string;
    estimatedDeliveryDate? : string;
    rating? : Rating;
}
