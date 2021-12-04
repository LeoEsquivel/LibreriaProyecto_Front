import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public book: Book = {
    _id: '',
    isbn: '',
    title: '',
    author: {
      _id: '',
      name: ''
    },
    editorial: {
      _id: '',
      name: ''
    },
    price: 0,
    amounth: 0,
    imgUrl: ''
  };

  constructor(private _activateRoute: ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params =>{
      const id: string = params['id'];
      this._httpService.getBook(id).subscribe((book:Book)=>{
        this.book = book;
      })
    })
  }

}
