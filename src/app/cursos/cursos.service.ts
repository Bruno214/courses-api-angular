import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }
  private readonly URI: string = "http://localhost:3000";

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<{courses: Course[]}>(`${this.URI}/cursos`).pipe(
      map(response => response.courses),
      delay(2000),
      tap(re => console.log(re)
      )
    );
  }
}
