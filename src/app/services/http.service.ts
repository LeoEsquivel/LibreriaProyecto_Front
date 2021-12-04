import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../models/book.model';
import { Author } from '../models/authors.model';
import { Editorial } from '../models/editorial.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) {
    
    
  }

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

  public getAuthorsBooks(id:string){
    return this._http.get<Book[]>(this.baseUrl + "/book/" + id + "/auall");
  }

  public getEditorials(){
    return this._http.get<Editorial[]>(this.baseUrl + "/editorial");
  }

  public getEditorialsBook(id:string){
    return this._http.get<Book[]>(this.baseUrl + "/book/"+id+"/edall");
  }

  public login(username: string, password: string): Observable<any>{
      return this._http.post(this.baseUrl+"/auth/signin", {username, password});
  }
}
