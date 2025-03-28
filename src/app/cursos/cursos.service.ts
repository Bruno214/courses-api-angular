import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, take, tap } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }
  private readonly URI: string = "http://localhost:8080";

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.URI}/courses`).pipe(
     // map(response => response.courses),
      delay(2000),
      tap(re => console.log(re)
      )
    );
  }

  createCourse(course: Course) {
    return this.httpClient.post(`${this.URI}/courses`, course).pipe(
      take(1)
    );
  }
}
