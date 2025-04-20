export interface Rating {
    id : number
    rate : number;
    text : string;
    firstName : string;
    lastName : string;
    productName : string;
    createdAt : Date;
    commentText? : string;
    commentId? : number;
    commentCreatedAt? : Date;
}
