import { Component, Input, OnInit } from '@angular/core';
import { Editorial } from 'src/app/models/editorial.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrls: ['./editorials.component.css']
})
export class EditorialsComponent implements OnInit {

  public editorials: Editorial [] = [];
  
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getEditorials().subscribe((editorials:Editorial[])=>{
      this.editorials = editorials;
    })
  }

}
