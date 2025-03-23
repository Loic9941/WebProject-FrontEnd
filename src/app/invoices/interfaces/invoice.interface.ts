import { InvoiceItem } from "./invoice-item.interface";

export interface Invoice {
    id : number
    invoiceItems : InvoiceItem[];
}
