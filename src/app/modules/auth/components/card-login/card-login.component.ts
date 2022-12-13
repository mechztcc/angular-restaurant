import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsService } from 'src/app/core/shared/services/forms/forms.service';
import { StorageService } from 'src/app/core/shared/services/storage/storage.service';
import { AuthService } from '../../shared/services/auth.service';

import { ILogin } from '../../shared/types/login.interface';
@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  isLoading: boolean = false;

  hidePass: boolean = false;

  payload: ILogin;

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    public formsService: FormsService,
    private authService: AuthService,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  handlePassVisibility() {
    this.hidePass = !this.hidePass;
  }

  validateForm() {
    if (this.form.valid) {
      this.prepareToSubmit();
      this.submit();
    }
  }

  prepareToSubmit() {
    this.payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };
  }

  submit() {
    this.isLoading = true;
    this.authService
      .login(this.payload)
      .subscribe((data) => {
        this.storageService.saveItem('token', `Bearer ${data.token}`);
        this.toastrService.success('Login realizado com sucesso!', 'Sucesso!');
        console.log(data);
        
        this.router.navigate(['']);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
