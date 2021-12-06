import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/authors.model';
import { Book } from 'src/app/models/book.model';
import { Editorial } from 'src/app/models/editorial.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class EditBookComponent implements OnInit {

  authors: Author[] = [];
  editorials: Editorial[] = [];

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

  constructor(private _activeRoute: ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params =>{
      const id:string = params['id'];
      this._httpService.getBook(id).subscribe((book:Book)=>{
        this.book = book;
      })
    });
    this.getAuthors();
    this.getEditorials();
  
  }

  public getAuthors(){
    this._httpService.getAuthors().subscribe((authors: Author[])=>{
      this.authors = authors;
    });
  }

  public getEditorials(){
    this._httpService.getEditorials().subscribe((editorials:Editorial[])=>{
      this.editorials = editorials;
    });
  }

  public saveChanges(){
    this._httpService.updateBook(this.book._id, this.book).subscribe((data)=>{
      this.ngOnInit();
    })
  }

}
