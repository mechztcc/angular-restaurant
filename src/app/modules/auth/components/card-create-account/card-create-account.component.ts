import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/modules/users/shared/services/users/users.service';

@Component({
  selector: 'app-card-create-account',
  templateUrl: './card-create-account.component.html',
  styleUrls: ['./card-create-account.component.scss'],
})
export class CardCreateAccountComponent implements OnInit {
  isLoading: boolean = false;

  form: FormGroup;

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

  validateForm() {}
}
