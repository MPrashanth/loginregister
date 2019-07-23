import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';




import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { AttendanceComponent } from './attendance/attendance.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from './logout/logout.component';



import { StudentreportComponent } from './studentreport/studentreport.component';
import { AttendancereportComponent } from './attendancereport/attendancereport.component';
import { CoursereportComponent } from './coursereport/coursereport.component';
import { GraphicalreportComponent } from './graphicalreport/graphicalreport.component';

import { CoursesModule } from './courses.module';
import { StudentsModule } from './students.module';

const myRouting: Routes = [
  { path: '', component: AdminloginComponent},
  {path: 'mydashboard', component: AdmindashboardComponent},
  { path: 'account', component: AdmindashboardComponent},
  

  
   
    // {path:'attendance', component:AttendanceComponent },
    {path:'reports', component:ReportsComponent,
    children:[
      {path:'studentreport', component: StudentreportComponent},
      {path:'attendancereport', component:AttendancereportComponent},
      {path:'coursereport', component:CoursereportComponent },
      {path:'graphicalreport', component: GraphicalreportComponent}
    ]},
  
    {path:'logout', component:LogoutComponent },

 
  // { path: 'courses', component: CoursesComponent},
  // { path: 'studentlogin', component: StudentloginComponent},
  // { path: 'settings', component: PasswordComponent},
  // { path: 'submitpassword', component: AdminloginComponent},
  // { path: 'studentsubmit', component: StudentreportComponent},
  // { path: 'submitcourse', component: CoursenameComponent},
]

@NgModule({
  declarations: [
    AppComponent, AdminloginComponent, AdmindashboardComponent, 
    ForgotpasswordComponent, AttendanceComponent, ReportsComponent, 
    LogoutComponent, StudentreportComponent, AttendancereportComponent, 
    CoursereportComponent, GraphicalreportComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    BrowserModule, RouterModule.forRoot(myRouting), MatInputModule, MatFormFieldModule, 
    BrowserAnimationsModule,MatListModule,MatCheckboxModule, MatIconModule,ReactiveFormsModule, 
    FormsModule, MatSelectModule, MatRadioModule, MatMenuModule, MatSidenavModule,MatGridListModule,
     CoursesModule, StudentsModule, HttpClientModule, LocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
