import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nested-form-array';
  myForm: FormGroup;
  educationList: any = [];

  validation_message = {
    first_name: [{ type: 'required', message: 'First Name is required' }],
    last_name: [{ type: 'required', message: 'Last Name is required' }],
    email: [{ type: 'required', message: 'Last Name is required' }],
    phone_no: [{ type: 'required', message: 'Mobile number is required' }],
  };

  validation_edumessage = {
    schoolName: [{ type: 'required', message: 'School Name is required' }],
    degree: [{ type: 'required', message: 'Degree is required' }],
    startDt: [{ type: 'required', message: 'Start Date is required' }],
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      first_name: new FormControl('', [Validators.required]),
      middle_name: new FormControl(''),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
      whatsapp_no: new FormControl(''),
      gender: new FormControl('MALE'),
      nationality: new FormControl(''),
      dob: new FormControl(''),
      martial_status: new FormControl('UNMARRIED'),
      bank_name: new FormControl(''),
      bank_accountno: new FormControl(''),
      bank_iban: new FormControl(''),
      swift_number: new FormControl(''),
      notes: new FormControl(''),
      educationdata: this.fb.array([]),
    });
  }
  get formControls() {
    return this.myForm.controls;
  }

  //#region  EDUCATION DATA
  educationdata(): FormArray {
    return this.myForm.get('educationdata') as FormArray;
  }
  neweducationdata(): FormGroup {
    return this.fb.group({
      schoolName: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
      fieldofstudy: new FormControl(''),
      startDt: new FormControl('', [Validators.required]),
      endDt: new FormControl(''),
      grade: new FormControl(''),
      notes: new FormControl(''),
    });
  }
  educationcon(index) {
    this.educationList = this.myForm.get('educationdata') as FormArray;
    const formGroup = this.educationList.controls[index] as FormGroup;
    return formGroup;
  }
  addeducationdata() {
    this.educationdata().push(this.neweducationdata());
  }
  removeeducationdata(i: number) {
    this.educationdata().removeAt(i);
  }
  //#endregion
  onSubmit() {}
}
