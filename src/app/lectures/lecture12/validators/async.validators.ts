import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

export class AsyncValidators {
  static checkForbiddenName(c: AbstractControl):
    Observable<ValidationErrors | null> {
    const name = c.value;

    const forbiddenNames = ['Peter', 'Kate', 'Sova'];

    return new Observable(observer => {
      if (forbiddenNames.includes(name)) {
        observer.next({ forbiddenName: true });
      } else {
        observer.next( null );
      }
    }).pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      first()
    )
  }
}