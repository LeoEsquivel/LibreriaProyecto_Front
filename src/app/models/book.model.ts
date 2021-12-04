import { Author } from './authors.model';
import { Editorial } from './editorial.model'

export interface Book {
    _id: string;
    isbn: string;
    title: string;
    author: Author;
    editorial: Editorial;
    price: number;
    amounth: number;
    imgUrl: string;
}