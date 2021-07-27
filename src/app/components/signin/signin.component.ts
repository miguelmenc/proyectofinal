import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  errorMsg: string


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpExample() {
    this.authService.singUpEmailPassword(this.email, this.password)

  }


}
