import { Injectable } from '@angular/core';

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
}
