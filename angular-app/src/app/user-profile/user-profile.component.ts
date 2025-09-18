import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, NgClass, NgIf, NgStyle],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user:{ name: string } | null = null
  userName = 'Дмитрий';
  userAge = 30;
  autoUrl = 'auto.jpg'
  isButtonDisabled = true;
  fontSize  = 20

  ngOnInit() {
    // Имитируем асинхронную загрузку данных
    setTimeout(() => {
      this.user = { name: 'Алиса' };
    }, 2000);
  }

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
