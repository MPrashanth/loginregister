import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



const myRouting: Routes = [
    
    { path: 'account', component: AdmindashboardComponent,
    children:[
    {path:'students', component:StudentsComponent,
    children:[
      {path:'addstudent', component: AddstudentComponent},
      {path:'viewstudent', component:ViewstudentComponent},
      {path:'editstudent', component:EditstudentComponent },
      {path:'deletestudent', component: DeletestudentComponent}
    ]},
]},
];



@NgModule({
    declarations: [StudentsComponent, AddstudentComponent, ViewstudentComponent, EditstudentComponent, DeletestudentComponent, 
        
    ],
    imports:[BrowserModule, RouterModule.forRoot(myRouting),  MatListModule, MatSelectModule, MatRadioModule, 
             MatMenuModule, MatSidenavModule,MatGridListModule, MatCheckboxModule, MatIconModule, MatInputModule,
             MatFormFieldModule, BrowserAnimationsModule],
    providers: [],
    exports: [StudentsComponent, AddstudentComponent, ViewstudentComponent, EditstudentComponent, DeletestudentComponent, 
    ]
})
export class StudentsModule { }