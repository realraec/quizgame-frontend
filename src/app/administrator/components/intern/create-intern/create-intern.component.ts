import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intern } from 'src/app/shared/models/intern.model';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-create-intern',
  templateUrl: './create-intern.component.html',
  styleUrls: ['./create-intern.component.scss'],
})
export class CreateInternComponent implements OnInit {
  createInternForm!: FormGroup;
  intern: Intern = {};
  isSuccess: boolean = false;
  isFailed: boolean = false;
  isSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private internService: InternService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createInternForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createIntern() {
    this.isSubmit = true;
    const formValue = this.createInternForm.value;
    this.intern.lastname = formValue['lastName'];
    this.intern.firstname = formValue['firstName'];
    this.intern.email = formValue['email'];
    this.intern.company = formValue['company'];
    this.intern.username = formValue['username'];
    this.intern.password = formValue['password'];
    this.intern.role = 'INTERN';
    this.internService.addIntern(this.intern).subscribe({
      complete: () => (this.isSuccess = true),
      error: (error) =>{
         console.log(error);
         this.isFailed = true;
      }
    });
  }
}
