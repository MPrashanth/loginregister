import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public router: Router) { }
  students(){
    this.router.navigate(['students']);
  }

  ngOnInit() {
  }

}
