import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsService } from 'src/app/core/shared/services/forms/forms.service';
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

  hidePass: boolean = false;

  get formControls() {
    return this.form.controls;
  }

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    public formsService: FormsService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

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
      role: 'ADMIN',
    };
  }

  submit() {
    this.isLoading = true;
    this.usersService
      .createAccount(this.payload)
      .subscribe((data) => {
        scrollTo(0, 0);
        this.toastrService.success('Sucesso!', 'Usuário criado com sucesso!');
        this.router.navigate(['/auth/login']);
      })
      .add(() => {
        this.isLoading = false;
        this.form.reset();
      });
  }

  handlePassVisibility() {
    this.hidePass = !this.hidePass;
  }
}
