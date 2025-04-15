import { User } from "../../users/interfaces/user.interface";

export interface Rating {
    id : number
    comment : string;
    rate : number;
    user : User,
    createdAt : Date;
}
