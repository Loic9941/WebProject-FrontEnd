import { InvoiceItem } from "../../invoice-items/interfaces/invoice-item.interface";

export interface Invoice {
    id : number
    invoiceItems : InvoiceItem[];
    status? : string;
    deliveryPartnerId? : number;
    deliveryPartnerName? : string
    createdAt? : string;
    paidAt? : string;
}
