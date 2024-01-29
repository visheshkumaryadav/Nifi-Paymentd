import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any
  private secretKey = 'YourSecretKey';

  encryptData(data: string): string {
    const encrypted = Crypto.arguments.encrypt(data, this.secretKey);
    return encrypted.toString();
  }

  constructor(private http:HttpClient){}
  login(formData: any) {
  // public loginuserformremote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:9090/login1",formData)
  } 
  signup(formData: any) {
    // public loginuserformremote(user:User):Observable<any>{
      return this.http.post<any>("http://localhost:9090/registerUser1",formData)
    }
    // otp(formData:any){
    //   return this.http.post<any>("",formData)
    // }
}
