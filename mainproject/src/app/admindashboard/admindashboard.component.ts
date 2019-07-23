import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  animations: [trigger('nani',
  
  [
    state('show', style({})),
    state('hide', style({left: '-220px'})),
    state('void', style({})),
    transition('show=>hide', animate(1000)),
    transition('hide=>show', animate(1000)),
    transition('void=>show', animate(1000)),

  ]
)]
})
export class AdmindashboardComponent implements OnInit {

  private sample:string='show';
  prashanth(){
    console.log('button is working');
    this.sample='hide';

  }

  constructor(public router: Router) { }
  // courses(){
  //   this.router.navigate(["courses"]);
  // }
  // studentlogin(){
  //   this.router.navigate(["studentlogin"]);
  // }
  // settings(){
  //   this.router.navigate(["settings"]);

  // }
  

  ngOnInit() {
  }

}
