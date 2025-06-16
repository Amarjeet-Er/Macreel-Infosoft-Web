import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-college-erp',
  templateUrl: './college-erp.component.html',
  styleUrls: ['./college-erp.component.scss']
})
export class CollegeErpComponent {
  demoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _crud: ServicesService
  ) {
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
      this._crud.bookademo(this.demoForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.success === true) {
            this._crud.ToastSuccess("Booked Successfully");            
            this.demoForm.reset();
          } else {
             this._crud.ToastSuccess("Demo Not Booked");
          }
        },
        error: (error: any) => {
          console.error('Booking error:', error);
           this._crud.ToastSuccess("Something went wrong. Please try again later.");
        }
      });
    } else {
       this._crud.ToastSuccess("Please fill out the form correctly.");
    }
  }
}

