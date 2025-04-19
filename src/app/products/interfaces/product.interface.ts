import { InvoiceItem } from "../../invoice-items/interfaces/invoice-item.interface";

export interface Product {
    id : number
    name : string;
    description? : string;
    price : number;
    contactId : number;
    image : string | undefined;
    category? : string 
    invoiceItems : InvoiceItem[];
}
