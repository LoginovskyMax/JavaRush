import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  list = [
    {
      name: 'Products', 
      link: ''
    },
        {
      name: 'Pain Guides',
      link: ''
    },
        {
      name: 'Community',
      link: ''
    },
        {
      name: 'Resources',
      link: ''
    },
        {
      name: 'Contact', 
      link: ''
    }
  
  ]
}
