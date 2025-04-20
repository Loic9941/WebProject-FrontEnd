import { Product } from "../../products/interfaces/product.interface";
import { Rating } from "../../products/interfaces/rating.interface";

export interface InvoiceItem {
    id : number
    invoiceId : number;
    productId? : number;
    productName : string;
    clientFullName? : string;
    unitPrice : number;
    quantity : number;
    status : string;
    createdAt : string;
    estimatedDeliveryDate? : string;
    rating? : Rating;
    deliveredAt? : string;
    productImage? : string
}
