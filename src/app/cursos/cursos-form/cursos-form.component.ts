import { AlertModalService } from './../../shared/services/alert-modal.service';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from '../../validation/validation-message';
import { AlertTypes } from '../../shared/alert-typer.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent implements OnInit{
  form!: FormGroup;
  submitted: boolean = false;
  messageError: string = "";


  constructor(private fb: FormBuilder, private cursosService: CursosService, private alertModalService: AlertModalService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.cursosService.createCourse(this.form.value).subscribe(
        success => {
          var nameCourse = this.form.value['name'];
          this.alertModalService.showAlert(AlertTypes.SUCCESS, `O curso ${nameCourse} foi inserido com sucesso.`, 3000);
          this.router.navigate(['/cursos'])
        },
        error => this.alertModalService.showAlert(AlertTypes.DANGER, 'Error ao criar curso, tente novamente'),
        () =>  console.log()

      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string): boolean {
    return this.form.get(field)?.errors == null ? false : true;
  }

  getMessageError(field: string): string{
    return ValidationMessages.getErrorMessage(field, this.form.get(field)?.errors)
  }
}
