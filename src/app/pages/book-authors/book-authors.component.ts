import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  public books: Book[] = [];

  constructor(private _activateRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params =>{
      const id: string = params['id'];
      this._httpService.getAuthorsBooks(id).subscribe((books: Book[])=>{
        this.books = books
      });
    });
  }

}
