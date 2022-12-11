import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/modules/users/shared/services/users/users.service';
import { IUsers } from 'src/app/modules/users/shared/types/users.interface';

@Component({
  selector: 'app-card-create-account',
  templateUrl: './card-create-account.component.html',
  styleUrls: ['./card-create-account.component.scss'],
})
export class CardCreateAccountComponent implements OnInit {
  isLoading: boolean = false;

  form: FormGroup;

  payload: IUsers;

  get formControls() {
    return this.form.controls;
  }

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required],
    });
  }

  validateForm() {
    if (!this.form.invalid) {
      this.prepareToSubmit();
      this.submit();
    }
  }

  prepareToSubmit() {
    this.payload = {
      email: this.formControls['email'].value,
      name: this.formControls['name'].value,
      password: this.formControls['password'].value,
      repeatPass: this.formControls['repeatPass'].value,
    };
  }

  submit() {
    this.isLoading = true;
    this.usersService
      .createAccount(this.payload)
      .subscribe((data) => {
        console.log(data);
      })
      .add(() => (this.isLoading = false));
  }
}
