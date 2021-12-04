import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;
  errormessage!:string;
  username!:string;
  password!:string;

  constructor(private _formBuilder: FormBuilder, private _httpService: HttpService) { }

  

  ngOnInit(): void {
    this.formLogin = this._formBuilder.group({
        username: ['username', [Validators.required]],
        password: ['password', [Validators.required]]
    });
  }

  public send():void{
    this._httpService.login(this.username, this.password).subscribe({
      next: data=>{
        console.log(data);
      },
      error: error => {
        this.errormessage = error.message;
        console.log('There was an error!', error)
      }
    })

  }

}
