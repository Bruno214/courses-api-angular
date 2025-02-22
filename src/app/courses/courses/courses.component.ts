import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { isEmpty, Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }
}
