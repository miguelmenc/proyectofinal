import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
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
  constructor(private router: Router, private notifier: NotifierService, public authService: AuthService) { }

  ngOnInit(): void {

  }

  loginGoogle() {
    this.authService.googleAuth().then(() => {
      this.router.navigate(['/'])
    }).catch(() => {
      console.error("Error en el login")
    })
  }
  
  loginInExample() {
    this.authService.singInEmailPassword(this.email, this.password)
  }
  signUpExample() {
    this.authService.singUpEmailPassword(this.emailS, this.passwordS).then(success => {
      this.notifier.notify('success', "Usuario creado correctamente");
    }).catch(error => {
      this.notifier.notify('error', "Ha habido un error, intentalo de nuevo")
    })

  }




  clickMe() {
    document.getElementById('newCard').setAttribute('style','display:block')
  

}
}
