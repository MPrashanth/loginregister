import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';





@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  hide = true;
  private resdata;
  private token;

 private loginForm: FormGroup;
  
 

  constructor(public router: Router,  private http: HttpClient, private localStorageService: LocalStorageService ) { }
  login(){
    console.log(this.loginForm.value);
    this.http.post('http://localhost:6767/nani/myproject/users/login', this.loginForm.value).subscribe
    (success=>{
      console.log(success);
      this.resdata = success;
       console.log(this.resdata.token);
      var data= this.resdata.token;
       console.log(data);
       this.token= data.token;
      this.localStorageService.set('token', data.token);
    },error=>{
      console.log(error);
    });
    this.router.navigate(["account"]);

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
  });

}
// onsubmit(loginForm: NgForm){
   
//   console.log(loginForm.value);
// }
}