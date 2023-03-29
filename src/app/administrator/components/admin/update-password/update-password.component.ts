import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdministratorService } from 'src/app/shared/services/administrator.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {

  updatePasswordForm!: FormGroup;

  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdministratorService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.initForm();
  }

  initForm() {
    this.updatePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
     
    });
  }

  updatePassword() {
    this.isSubmit = true;
    const formValue = this.updatePasswordForm.value;
   

    this.adminService.updatePassword(this.id, formValue['oldPassword'],formValue['newPassword'] ).subscribe({
      complete: () => (this.isSuccess = true),
      error: (error) =>{
        console.log("error")
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
