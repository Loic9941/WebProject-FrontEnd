import { InvoiceItem } from "../../invoice-items/interfaces/invoice-item.interface";

export interface Invoice {
    id : number
    invoiceItems : InvoiceItem[];
    status? : string;
    deliveryPartnerId? : number;
    createdAt? : string;
    paidAt? : string;
}
