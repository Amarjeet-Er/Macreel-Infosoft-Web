import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-college-erp',
  templateUrl: './college-erp.component.html',
  styleUrls: ['./college-erp.component.scss']
})
export class CollegeErpComponent {
  demoForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.demoForm.valid) {
      console.log('Form Data:', this.demoForm.value);
      this.submitted = true;
      this.demoForm.reset();
    }
  }
}
