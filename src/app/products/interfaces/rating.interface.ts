import { InvoiceItem } from "../../invoice-items/interfaces/invoice-item.interface";
import { User } from "../../users/interfaces/user.interface";

export interface Rating {
    id : number
    comment : string;
    rate : number;
    user : User,
    createdAt : Date;
    invoiceItem : InvoiceItem
}
