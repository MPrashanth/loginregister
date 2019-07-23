import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  typesOfCourses = ['Angular', 'PHP', 'React', 'WebDesigning', 'Javascript', 'SQL', 'Java'];

  constructor(public router: Router) { }
  submitcourse(){
    this.router.navigate(['courses']);
  }
 
  ngOnInit() {
  }

}
