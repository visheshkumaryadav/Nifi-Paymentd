import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // contactForm: FormGroup;

  // constructor(private fb: FormBuilder,private http: HttpClient) {
  //     this.contactForm = this.fb.group({
  //         name: ['', Validators.required],
  //         subject: ['', Validators.required],
  //         email: ['', [Validators.required, Validators.email]],
  //         mobileno: ['', Validators.required],
  //         message: ['', Validators.required]
  //     });
  // }

  // submitForm() {
  //   if (this.contactForm.valid) {
  //       const formData = this.contactForm.value;
  //       // Make an API call to send formData to the server
  //       this.http.post("http://localhost:8080/api/contact/sendEmail", formData).subscribe(
  //           (response) => {
  //               // Handle success response
  //               console.log(response);
  //               alert("Massege sent successfully");
  //           },
  //           () => {
  //               // Handle API call error
  //               alert("Massege not sent");

  //           }
  //       );
  //   } else {
  //       // Handle form validation errors
  //       alert("Massege invalid sent");

  //   }
  // }
  
}
