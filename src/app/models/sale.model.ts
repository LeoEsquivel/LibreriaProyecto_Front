import { Book } from "./book.model";
import { User } from "./user.model";

export interface Sale{
    _id:string;
    user: User;
    book: Book[];
    total: number;
}