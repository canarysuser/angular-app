import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse, LoginModel } from './login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated: boolean = false; 
  authenticatedUser: AuthenticationResponse = <AuthenticationResponse>{}; 
  private authUrl: string = "http://localhost:5042/api/Accounts"
  constructor(
    private http : HttpClient
  ) { }

  authenticate(user: LoginModel) : any { 
    var body = JSON.stringify(user);
    
    return this.http.post<AuthenticationResponse>(this.authUrl, body, 
      {headers: new HttpHeaders({'Content-Type':'application/json'}) });
  }
  signOut() { 
    this.isAuthenticated=false; 
    this.authenticatedUser=<AuthenticationResponse>{}; 
    sessionStorage.clear();
    return;
  }

}
