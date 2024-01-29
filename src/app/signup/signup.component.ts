import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: any = FormGroup;
  submitted = false;
  get f() { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const formData = this.registerForm.value;

    this.authService.signup(formData).subscribe(
      (response) => {
        console.log(response); // Handle the response from the backend API
        alert("Signup successfully!!");
        this.router.navigate(['/verifyotp']);
      },
      (error) => {
        console.error(error); // Handle any errors that occur during the API call
        // You can show an error message to the user here if needed.
        alert("User is already exist!!.....")
      }
    );
  }
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      pcard: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      emailId: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$'), ]],
      password: ['', [Validators.required]]
    });
  }

}
