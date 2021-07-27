import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;
  inicio_sesion: boolean = false;

  constructor(private authService: AuthService,
    ) {
    this.user = this.authService.userData();
   }

  ngOnInit(): void {

  }

  login() {
    this.authService.googleAuth().then(data => {
      console.log("Dale ok", data);
        this.inicio_sesion = true;
    }, error => {
      console.log("Dale NO", error);
      this.inicio_sesion = false;
    })
  }





}
