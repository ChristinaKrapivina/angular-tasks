import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export class CustomValidators {
  static nameIsNotTest(c: AbstractControl): ValidationErrors | null {
    if (c.value === 'test') {
      return { forbiddenName: true };
    }
    return null;
  }

  static passwordMatch(password: string, passwordConfirm: string)
    : ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const pass = formGroup.controls[password];
      const passConf = formGroup.controls[passwordConfirm];

      if (pass.value !== passConf.value) {
        return { passwordMatch: true };
      }
      return null;
    }
  }
}