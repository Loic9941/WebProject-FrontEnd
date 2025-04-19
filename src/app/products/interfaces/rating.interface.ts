import { InvoiceItem } from "../../invoice-items/interfaces/invoice-item.interface";
import { User } from "../../users/interfaces/user.interface";

export interface Rating {
    id : number
    text : string;
    rate : number;
    user : User,
    createdAt : Date;
    invoiceItem : InvoiceItem
}
