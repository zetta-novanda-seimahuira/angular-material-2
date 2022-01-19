import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { Mentor } from './mentor';
// import mentor from './_files/mentor.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }

    public getJSON(): Observable<any> {
      return this.http.get('assets/mentor.json')
    }

  // getAllMentors(): Observable<any> {
  //   return of(mentor);
  // }

}





