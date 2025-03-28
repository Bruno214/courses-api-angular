import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { CursosService } from '../cursos.service';
import { of } from 'rxjs';
import { Course } from '../models/course';

export const CourseResolveGuard: ResolveFn<Course> = (route, state) => {
  const courseService = inject(CursosService);

  if (route.params && route.params['id']) {
    return courseService.loadById(route.params['id']);;
  }

  return of({
    id: null,
    name: null,
  });
};
