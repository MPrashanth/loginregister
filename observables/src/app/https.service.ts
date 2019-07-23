import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class HttpsService {

  constructor(private http: HttpClient) { }

  adcourse(data){
    var response=this.http.post('http://localhost:6767/nani/myproject/courses/addcourse', data);
    return response;
  }
  viewallcourses(data){
    var response=this.http.get('http://localhost:6767/nani/myproject/courses/viewcourse?data='+JSON.stringify(data));
    return response;
  }
}
