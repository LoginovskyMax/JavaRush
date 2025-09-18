import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() users: { name: string, id: number }[] = [];
  @Input() deleteUser:(id:number)=>void = () => {};

  @Output() userDeleted = new EventEmitter<number>();

  ngOnChanges() {
    console.log('Изменения пропсов');
  }

  ngOnDestroy() {
        // 3. ngOnDestroy: компонент будет удален.
        // Обязательно очищаем все "долгоживущие" процессы.
       console.log( 'Delete component' );
  }

  a = 1
  b = 2

   onDelete(id:number) {
    console.log('delete');
    
    // При клике "испускаем" событие и передаем в него id пользователя
    this.userDeleted.emit(id);
  }

}
