import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, NgClass],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userName = 'Дмитрий';
  userAge = 30;
  autoUrl = 'auto.jpg'
  isButtonDisabled = true;

  // Методы класса реализуют поведение, например, обработку событий
  greetUser() {
    console.log(`Привет, ${this.userName}!`);
  }

  showStatus() {
    return this.userAge > 18 ? 'Совершеннолетний' : 'Несовершеннолетний'
  }

    onInput(event: Event) {
    // Получаем новое значение из input и обновляем свойство компонента
    this.userName = (event.target as HTMLInputElement).value;
  }

  toggleDisabled() {
    this.isButtonDisabled = !this.isButtonDisabled
  }
}
