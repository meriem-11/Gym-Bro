import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareddataService } from '../shared/shareddata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder , private sharedDataService: ShareddataService) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      date: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }


  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    for (const control in this.formControls) {
      if (this.formControls.hasOwnProperty(control)) {
        this.formControls[control].markAsTouched();
      }
    }

    if (this.registrationForm.valid) {
      const subscriberData = this.registrationForm.value;

      if (this.sharedDataService) {
        this.sharedDataService.addSubscriber(subscriberData).subscribe(
          (response: any) => {
            console.log('Subscriber data saved successfully!', response);

            Swal.fire("Registration successful ! Done .");

            this.registrationForm.reset();
          },
          (error: any) => {
            console.error('Error saving subscriber data:', error);
          }
        );
      } else {
        console.error('Shared data service is not initialized.');
      }
    }
  }
}
