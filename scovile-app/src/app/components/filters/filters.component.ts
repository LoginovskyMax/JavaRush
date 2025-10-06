import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

type filterType = {
    id: number;
    name: string,
    check: boolean
}

@Component({
  selector: 'app-filters',
  imports: [NgFor],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  keywords:filterType[] = []
  filters = [
    {
      title: 'Product Type',
      list: [
        {
          id: 0,
          name: 'Whole Chilies',
          check: false
        },
        {
          id: 1,
          name: 'Ground Spices',
          check: false
        },
        {
          id: 2,
          name: 'Sadistic Blends',
          check: false
        },
        {
          id: 3,
          name: 'Scorching Sauces',
          check: false
        }
      ]
    },
        {
      title: 'Filter by Agony Level',
      list: [
        {
          id: 4,
          name: 'Warming Up',
          check: false
        },
        {
          id: 5,
          name: 'Serious Heat',
          check: false
        },
        {
          id: 6,
          name: 'Ring of Fire',
          check: false
        },
        {
          id: 7,
          name: 'Legal Weapon',
          check: false
        }
      ]
    }
  ]

  changeFilters(filter:filterType ) {
     if(filter.check){
       this.keywords = this.keywords.filter(key => key.id !== filter.id)
     } else {
       this.keywords.push(filter)
     }

     this.changeFilter(filter.id)
  }

  deleteFilter(id:number ) {
     this.keywords = this.keywords.filter(key => key.id !== id)
     this.changeFilter(id)
  }

  changeFilter(id:number) {
     this.filters.forEach(block => {
      block.list.forEach(item => {
        if(id === item.id) {
          item.check = !item.check
        }
      });
     })
  }
}
