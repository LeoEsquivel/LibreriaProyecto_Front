import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: Book[] = [];

  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getBooks().subscribe((books: Book[])=>{
      this.books = books;
    });
  }

}
