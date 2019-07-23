import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpsService } from '../https.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
  providers:[HttpsService]
})
export class AddcourseComponent implements OnInit {
  hide = true;
  token:any;
  private AddCourseForm: FormGroup;
  

  constructor(private https:HttpsService, private localStorageService: LocalStorageService) { }

  ngOnInit(){
    this.AddCourseForm = new FormGroup({
      'id': new FormControl('',[Validators.required]),
      'status': new FormControl('',[Validators.required]),
    'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    'type': new FormControl('',[Validators.required]),
    'token': new FormControl('',[Validators.required]),
    'usee': new FormControl('',[Validators.required]),
});

this.viewcourses();

}
addcourse(){
  console.log(this.AddCourseForm.value);
  this.AddCourseForm.value.usee=this.localStorageService.get('username');
  this.AddCourseForm.value.token=this.localStorageService.get('token');
  this.https.adcourse(this.AddCourseForm.value).subscribe
  (success=>{
    console.log(success);
    this.viewcourses();
    
  },error=>{
    console.log(error);
    // alert("Invalid login");
  });
  // this.router.navigate(["dashboard"]);

} 

viewcourses(){
  // view course data
this.https.viewallcourses({username:this.localStorageService.get('username'),
token:this.localStorageService.get('token')}).subscribe(success=>{
  console.log(success);
  },error=>
  {console.log(error)});
}
}
