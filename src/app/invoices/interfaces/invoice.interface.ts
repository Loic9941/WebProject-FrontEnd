import { InvoiceItem } from "./invoice-item.interface";

export interface Invoice {
    id : number
    invoiceItems : InvoiceItem[];
    status? : string;
    deliveryPartnerId? : number;
    createdAt? : string;
    paidAt? : string;
    shippedAt? : string;
    deliveredAt? : string;
}
