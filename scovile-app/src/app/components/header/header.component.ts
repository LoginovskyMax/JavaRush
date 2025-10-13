import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
}
