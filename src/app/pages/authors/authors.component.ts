import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authors.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authors: Author[] = [];
  
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getAuthors().subscribe((authors:Author[])=>{
      this.authors = authors;
    })
  }

}
