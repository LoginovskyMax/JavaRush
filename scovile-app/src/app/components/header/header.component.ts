import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)
  user:any = null

  list = [
    {
      name: 'Products', 
      link: '/home'
    },
        {
      name: 'Pain Guides',
      link: '/'
    },
        {
      name: 'Community',
      link: '/'
    },
        {
      name: 'Resources',
      link: '/'
    },
        {
      name: 'Contact', 
      link: '/'
    }
  ]
   constructor(private authService:AuthService){}
 
  ngOnInit() {
     this.user = this.authService.user
   }

  goToRegistrate(){
     this.router.navigate(['/registrate'])
  }

  logOut() {
    console.log('log out');
    
  }
}
