import { Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DI-RxJS-Services';

  users: User[] = [
    { name: 'Pesho', age: 21 },
    { name: 'Ganio', age: 21 },
    { name: 'Ginka', age: 21 },
    { name: 'Chocho', age: 21 },
    { name: 'Cecko', age: 21 },
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = { name: inputName.value, age: Number(inputAge.value) };
    this.users.push(user);
    inputName.value = '';
    inputAge.value = '';
  }
}
