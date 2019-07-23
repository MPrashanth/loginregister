import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CoursesComponent } from './courses/courses.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const myRouting: Routes = [
    
    
    { path: 'account', component: AdmindashboardComponent,
    children:[
      {path:'courses', component:CoursesComponent,
    children:[
    {path:'addcourse', component: AddcourseComponent},
    {path:'viewcourse', component:ViewcourseComponent},
    {path:'editcourse', component:EditcourseComponent },
    {path:'deletecourse', component: DeletecourseComponent}
  ]},
]},
];



@NgModule({
    declarations: [CoursesComponent, AddcourseComponent, ViewcourseComponent, EditcourseComponent, 
        DeletecourseComponent],
    imports:[BrowserModule, RouterModule.forRoot(myRouting), MatListModule, MatSelectModule, MatRadioModule, 
        MatMenuModule, MatSidenavModule,MatGridListModule, MatCheckboxModule, MatIconModule, MatInputModule, 
        MatFormFieldModule, BrowserAnimationsModule],
    providers: [],
    exports: [CoursesComponent,  AddcourseComponent, ViewcourseComponent, EditcourseComponent, 
        DeletecourseComponent]
})
export class CoursesModule { }