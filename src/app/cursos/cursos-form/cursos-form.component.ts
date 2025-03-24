import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidationMessages } from '../../validation/validation-message';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent implements OnInit{
  form!: FormGroup;
  submitted: boolean = false;
  messageError: string = "";


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log('submit');
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log("cancel");
  }

  hasError(field: string): boolean {
    console.log(this.form.get(field)?.errors);

    return this.form.get(field)?.errors == null ? false : true;
  }

  getMessageError(field: string): string{
    return ValidationMessages.getErrorMessage(field, this.form.get(field)?.errors)
  }
}
