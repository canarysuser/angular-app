import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResponse, LoginModel } from './login-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  model: LoginModel = <LoginModel>{};
  
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {
    this.model = new LoginModel('', '');
    this.loginForm = new FormGroup({
      username: new FormControl(this.model.username, Validators.required),
      password: new FormControl(this.model.password, 
        [Validators.required, Validators.minLength(3)])
    });
  }
  get username() { return this.loginForm.controls["username"]}
  get password() { return this.loginForm.controls["password"]}

  onFormSubmit(e: any) :any {
    e.preventDefault();
    if(this.loginForm.invalid) return true;

    this.model = { ...this.loginForm.value };
    this.authService.authenticate(this.model)
      .subscribe((response: AuthenticationResponse) => {
        this.authService.isAuthenticated = true;
        this.authService.authenticatedUser = response;
        //Browsers session storage will hold this response value for the duration of the application
        //Session storage is deleted by the browser when the user navigates out of the site. 
        sessionStorage.setItem('user', JSON.stringify(response));
        //redirect the user to the home page. 
        let redirectUrl = this.currentRoute.snapshot.queryParams["returnUrl"] || '/home'
        this.router.navigate([redirectUrl]);
      }, (error: any) => {
        console.log('ERROR:', error);
        this.errors=error.error;
      });
  }
  errors:any; 
}
