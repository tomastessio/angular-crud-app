import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  onLogin(): void {
    this.authService.login('tomas@gmail.com', '123456')
    .subscribe( user => {
      this.router.navigate(['/heroes/list']);
    } )
  }

}
