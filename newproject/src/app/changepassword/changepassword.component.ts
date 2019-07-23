import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  userpassword;

  constructor(public router: Router, private http: HttpClient ) { }
  changemypassword() {
    this.router.navigate(["changemypassword"]);
    
      this.http.post('http://localhost:7788/user/changepassword', this.userpassword).subscribe(success=>{
      console.log(success);
      console.log("password changed succesfully");
  },error=>{
    console.log(error);
  }
      
    );
    }
    
  

  ngOnInit() {
  }

}
