import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faCoffee = faCoffee;
// //Form Validables 
 registerForm:any = FormGroup;
submitted = false;
url: SafeUrl | undefined;
get f() { return this.registerForm.controls; }

constructor( private formBuilder: FormBuilder,private router:Router,private authService:AuthService){}
 
onSubmit() {
  this.submitted = true;
  
  if (this.registerForm.invalid) {
    return;
  }
  const formData = this.registerForm.value;

  this.authService.login(formData).subscribe(
    (response) => {
      console.log(response); // Handle the response from the backend API
      alert("Login successfully!!");
      this.router.navigate(['/']);
    },
    (error) => {
      
      console.error(error); // Handle any errors that occur during the API call
      // You can show an error message to the user here if needed.
      alert("User emailId or password are incorrect! please try again.")
    }
  );
}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
  // onCodeChange(url:SafeUrl){
  //   console.log(url);
  //   this.url=url;
  //   }
  //   encrypt() {
  //     const originalData = 'Sensitive Data';
  //     const encryptedData = this.authService.encryptData(originalData);
  
  //     console.log('Original Data:', originalData);
  //     console.log('Encrypted Data:', encryptedData);
  //   }
  
}
