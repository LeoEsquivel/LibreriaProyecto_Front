import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/authors.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class EditAuthorComponent implements OnInit {

  public author: Author = {
    _id: '',
    name: ''
  }

  constructor(private _activeRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params)=>{
      const id:string = params['id'];
      this._httpService.getAuthor(id).subscribe((author:Author)=>{
        this.author = author;
      })
    })
  }


  public saveChanges(){
      this._httpService.updateAuthor(this.author._id, this.author).subscribe((data)=>{
        this.ngOnInit();
      })
  }

  
}
