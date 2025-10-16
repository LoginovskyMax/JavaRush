import { Component, inject } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Location, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, NgIf],
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.scss'
})
export class RegistrateComponent {
  router = inject(Router)

  userData = {
    email: '',
    password: ''
  };
  error = ''

  constructor(private authService:AuthService, private location:Location){}

  async onSubmit() {
    const response = await this.authService.findUser(this.userData)

    if(response.type === 'error') {
      this.error = response.data
    } else {
      this.error = ''
      this.authService.getUser(response.data)
      this.location.back()
    }
  }
}
