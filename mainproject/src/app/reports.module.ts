// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';



// import { ReportsComponent } from './reports/reports.component';
// import { StudentreportComponent } from './studentreport/studentreport.component';
// import { AttendancereportComponent } from './attendancereport/attendancereport.component';
// import { CoursereportComponent } from './coursereport/coursereport.component';
// import { GraphicalreportComponent } from './graphicalreport/graphicalreport.component';



// const myRouting: Routes = [ 
//     {path:'reports', component:ReportsComponent,
// children:[
//   {path:'studentreport', component: StudentreportComponent},
//   {path:'attendancereport', component:AttendancereportComponent},
//   {path:'coursereport', component:CoursereportComponent },
//   {path:'graphicalreport', component: GraphicalreportComponent}
// ]}
// ];

// @NgModule({
//     declarations: [ReportsComponent, StudentreportComponent, AttendancereportComponent, CoursereportComponent, 
//         GraphicalreportComponent],
//     imports:[BrowserModule, RouterModule.forRoot(myRouting)],
//     providers: [],
//     exports: [ReportsComponent, StudentreportComponent, AttendancereportComponent, CoursereportComponent, 
//         GraphicalreportComponent]
// })
// export class ReportsModule { }