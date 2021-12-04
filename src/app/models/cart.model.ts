import { Book } from './book.model';
import { User } from './user.model';

export interface Cart{
    _id: string;
    user: User;
    books: Book[];
    total: number;
}