import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailS: string;
  passwordS: string;
  email: string;
  password: string;
  errorMsg: string;
  constructor(private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {

  }

  loginGoogle() {
    this.authService.googleAuth().then(() => {
      this.router.navigate(['/chat'])
    }).catch(() => {
      console.error("Error en el login")
    })
  }
  
  loginInExample() {
    this.authService.singInEmailPassword(this.email, this.password)
  }
  signUpExample() {
    this.authService.singUpEmailPassword(this.emailS, this.passwordS)

  }


  clickMe() {
    document.getElementById('newCard').setAttribute('style','display:block')
  

}
}
