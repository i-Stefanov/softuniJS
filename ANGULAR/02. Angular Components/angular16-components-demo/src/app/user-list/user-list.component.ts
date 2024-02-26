import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  status: string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users = [
    { name: 'Pesho', age: 21, status: 'green' },
    { name: 'Gosho', age: 23, status: 'yellow' },
    { name: 'Pancho', age: 20, status: 'red' },
    { name: 'Galya', age: 24, status: 'green' },
    { name: 'Ceco', age: 28, status: 'yellow' },
    { name: 'Concho', age: 24, status: 'red' },
    { name: 'Poncho', age: 25, status: 'green' },
  ] as User[];
}
