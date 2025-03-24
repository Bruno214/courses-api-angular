import { ValidationErrors } from "@angular/forms";

export class ValidationMessages {
  static getErrorMessage(controlName: string, errors: ValidationErrors | null | undefined): string {
    if (errors?.['required']) {
      return `Por favor informe um ${controlName} para o curso`;
    }

    if (errors?.['minlength']) {
      console.log('teste');

      return `${controlName} precisa ter no mínimo ${errors['minlength'].requiredLength} caracteres`;
    }

    if (errors?.['maxlength']) {
      return `${controlName} precisa ter no máximo ${errors['maxlength'].requiredLength} caracteres`;
    }

    return `Informe um ${controlName} valido `;
  }


}
