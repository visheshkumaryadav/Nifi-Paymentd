import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {
  otpForm!: FormGroup;
  getNextInput: any;
  getPrevInput: any;
  // @ViewChild('digit1Input') digit1Input!: ElementRef;
  // @ViewChild('digit2Input') digit2Input!: ElementRef;
  // @ViewChild('digit3Input') digit3Input!: ElementRef;
  // @ViewChild('digit4Input') digit4Input!: ElementRef;
  // @ViewChild('digit5Input') digit5Input!: ElementRef;
  // @ViewChild('digit6Input') digit6Input!: ElementRef;
  // getNextInput: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.otpForm = this.formBuilder.group({ 
      digit1: ['', [Validators.required, Validators.pattern('[0-9]{1}')]],
      digit2: [{ value: '', disabled: true }, [Validators.pattern('[0-9]{1}')]],
      digit3: [{ value: '', disabled: true }, [Validators.pattern('[0-9]{1}')]],
      digit4: [{ value: '', disabled: true }, [Validators.pattern('[0-9]{1}')]],
      digit5: [{ value: '', disabled: true }, [Validators.pattern('[0-9]{1}')]],
      digit6: [{ value: '', disabled: true }, [Validators.pattern('[0-9]{1}')]],
    });
  }
  enableNextField(event: any, fieldName: string) {
    const inputLength = event.target.value.length;
    if (inputLength === 1) {
      this.otpForm.get(fieldName)?.enable();
      const nextInput = event.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus(); // Access nativeElement and call focus()
      }
    }
    if (inputLength === 0) {
      this.otpForm.get(fieldName)?.disable()
      const prevInput = event.target.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus(); // Access nativeElement and call focus()
      }
    }
  }
  // getNextInput(fieldName: string): ElementRef | undefined {
  //   switch (fieldName) {
  //     case 'digit1':
  //       return this.digit2Input;
  //     case 'digit2':
  //       return this.digit3Input;
  //     case 'digit3':
  //       return this.digit4Input;
  //     case 'digit4':
  //       return this.digit5Input;
  //     case 'digit5':
  //       return this.digit6Input;
  //     default:
  //       return undefined;
  //   }
  // }

  // getPrevInput(fieldName: string): ElementRef | undefined {
  //   switch (fieldName) {
  //     case 'digit2':
  //       return this.digit1Input;
  //     case 'digit3':
  //       return this.digit2Input;
  //     case 'digit4':
  //       return this.digit3Input;
  //     case 'digit5':
  //       return this.digit4Input;
  //     case 'digit6':
  //       return this.digit5Input;
  //     default:
  //       return undefined;
  //   }
  // }
  verifyOTP() {
    if (this.otpForm.valid) {
      //const enteredOTP = '';
      const enteredOTP = this.otpForm.value.digit1 +
        this.otpForm.value.digit2 +
        this.otpForm.value.digit3 +
        this.otpForm.value.digit4 +
        this.otpForm.value.digit5 +
        this.otpForm.value.digit6;
      // You should replace this URL with the actual backend API endpoint
      const backendApiUrl = ''; // Add your backend API URL here
      // Send the OTP to the backend for verification
      this.http.post<any>(backendApiUrl, { otp: enteredOTP }).subscribe(
        (response: { [x: string]: any; }) => {
          // Handle the response from the backend 
          if (response['isValid']) {
            // OTP is correct, navigate to the next page
            this.router.navigate(['/login']);
            console.log('OTP Verified');
            alert('Correct OTP! Login successfully');
          } else {
            console.log('Invalid OTP');
            alert('Incorrect OTP! Please try again.....');
            // Handle incorrect OTP (e.g., show an error message)
          }
        },
        (error: any) => {
          console.error('Error verifying OTP', error);
          alert('Error verifying OTP. Please try again later.');
          // Handle the error (e.g., show an error message)
        }
      );
     }
    //  else {
    //   console.log('Invalid OTP');
    //   // Handle invalid OTP (e.g., show an error message)
    // }
  }
}
