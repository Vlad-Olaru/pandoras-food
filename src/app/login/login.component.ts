import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginValid = true;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/admin']).then();
    }
  }

  signInWithEmailAndPassword() {
    let username = this.loginForm.controls.username.getRawValue();
    let password = this.loginForm.controls.password.getRawValue();
    if (!username || !password) {
      this.loginValid = false;
      return;
    }
    this.authService.signInWithEmailPassword(username, password).then().catch(() => this.loginValid = false);
  }

}
