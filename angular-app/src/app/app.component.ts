import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, UsersListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showList= true
  title = 'angular-app';
  users = [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Алиса' },
    { id: 3, name: 'Иван' },
  ];

  removeUser(id:number) {
    this.users = this.users.filter(user => user.id !== id)
  }

  toggleDisabled() {
    this.showList = !this.showList
  }
}
