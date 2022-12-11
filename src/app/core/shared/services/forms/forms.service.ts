import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  checkField(field: any) {
    if (field.valid) {
      return true;
    }

    if (field.invalid && field.dirty) {
      return false;
    }

    return true;
  }

  checkForm(form: FormGroup) {
    if (form.invalid) {
      return false;
    }

    return true;
  }
}
