import { Product } from "../../products/interfaces/product.interface";

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
}
