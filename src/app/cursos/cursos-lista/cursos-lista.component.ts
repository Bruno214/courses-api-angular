import { AlertModalService } from '../../shared/services/alert-modal.service';
import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { catchError, Observable, of, Subject } from 'rxjs';
import { AlertTypes } from '../../shared/alert-typer.enum';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss'
})
export class CursosListaComponent implements OnInit{

  courses$: Observable<Course[]> = of([]);
  error$ = new Subject<boolean>();

  constructor(private cursosService: CursosService,
    private alertModalService: AlertModalService){}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.error$.next(false);

    this.courses$ = this.cursosService.getCourses()
    .pipe(
      catchError(error => {
        this.handleError()
        this.error$.next(true);
        return of();
      })
    );
  }

  private handleError() {
    this.alertModalService.showAlert(AlertTypes.DANGER, 'Error ao carrgar a lista de cursos, tente novamente mais tarde');
  }


}
