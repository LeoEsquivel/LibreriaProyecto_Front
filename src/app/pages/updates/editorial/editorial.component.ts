import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editorial } from 'src/app/models/editorial.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditEditorialComponent implements OnInit {

  public editorial: Editorial = {
    _id: '',
    name: ''
  }

  constructor(private _activeRoutes: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe(params =>{
      const id:string = params['id'];
      this._httpService.getEditorial(id).subscribe((editorial: Editorial)=>{
        this.editorial = editorial;
      })
    })
  }

  public saveChanges(){
    this._httpService.updateEditorial(this.editorial._id, this.editorial).subscribe((data)=>{
      this.ngOnInit();
    })
  }

}
