import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courses = [
    {value: 'angular-0', viewValue: 'Angular'},
    {value: 'react-1', viewValue: 'React'},
    {value: 'php-2', viewValue: 'PHP'},
    {value: 'javascript-3', viewValue: 'JavaScript'},
    {value: '.net-4', viewValue: '.NET'},
    {value: 'mongobd-5', viewValue: 'MongoDB'},
    {value: 'java-6', viewValue: 'Java'},
    {value: 'mysql-7', viewValue: 'MySql'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
