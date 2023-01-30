import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.builder.group(
      {
        fullName: [
          '',
          [Validators.required, Validators.max(2), Validators.min(10)],
        ],
        emailAddress: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
          ],
        ],
        phoneNumber: ['', [Validators.required]],
        comment: ['', [Validators.required]],
      },
      { updateOn: 'blur' }
    );
    console.log(this.contactForm);
  }

  get contactFormControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    //check console
    console.log(this.contactForm);
    this.contactForm.markAsDirty();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    }
  }
}
