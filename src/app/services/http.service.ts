import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../models/book.model';
import { Author } from '../models/authors.model';
import { Editorial } from '../models/editorial.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) { }

  public getBooks(){
    return this._http.get<Book[]>(this.baseUrl + "/book");
  }

  public getBook(id:string){
    return this._http.get<Book>(this.baseUrl + "/book/" + id);
  }

  /*public searchBook(query: string){
    return this._http.get(this.baseUrl + "/book/search" + query);
  }*/

  public getAuthors(){
    return this._http.get<Author[]>(this.baseUrl + "/author");
  }

  public getAuthor(id:string){
    return this._http.get<Author>(this.baseUrl + "/author/"+id);
  }

  public getAuthorsBooks(id:string){
    return this._http.get<Book[]>(this.baseUrl + "/book/" + id + "/auall");
  }

  public getEditorials(){
    return this._http.get<Editorial[]>(this.baseUrl + "/editorial");
  }

  public getEditorial(id:string){
    return this._http.get<Editorial>(this.baseUrl+"/editorial/"+id);
  }

  public getEditorialsBook(id:string){
    return this._http.get<Book[]>(this.baseUrl + "/book/"+id+"/edall");
  }

  public getAllSales(){
    return this._http.get<Sale[]>(this.baseUrl + "/sale");
  }

  public addAuthor(name:string): Observable<any>{
    const headers = { 'Content-Type': 'application/json'};  
    var data = {
      name: name
    };
    const body = JSON.stringify(data);
    return this._http.post(this.baseUrl+"/author/", body, {headers: headers});
  }

  public addEditorial(name:string): Observable<any>{
    const headers = { 'Content-Type': 'application/json'};  
    var data = {
      name: name
    };
    const body = JSON.stringify(data);
    return this._http.post(this.baseUrl+"/editorial/", body, {headers: headers});
  }

  public addBook(book:any){
    const headers = { 'Content-Type': 'application/json'};  
    const body = JSON.stringify(book);
    return this._http.post(this.baseUrl+"/book/", body, {headers: headers})
  }

  public deleteEditorial(id:string){
    return this._http.delete(this.baseUrl+"/editorial/"+id);
  }

  public deleteAuthor(id:string){
    return this._http.delete(this.baseUrl+"/author/"+id);
  }

  public deleteBook(id:string){
    return this._http.delete(this.baseUrl+"/book/"+id);
  }

  public updateAuthor(id:string, author:Author){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(author);
    return this._http.patch(this.baseUrl+"/author/"+id, body, {headers: headers});
  }

  public updateEditorial(id:string, editorial:Editorial){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(editorial);
    return this._http.patch(this.baseUrl+"/editorial/"+id, body, {headers: headers});
  }

  public updateBook(id:string, book:Book){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(book);
    return this._http.patch(this.baseUrl+"/book/"+id, body, {headers: headers});
  }

  public login(username: string, password: string): Observable<any>{
      const headers = { 'content-type': 'application/json'};  
      const body=JSON.stringify({'username': username, 'password': password});
      return this._http.post(this.baseUrl+"/auth/signin", body, {'headers':headers});
  }
}
