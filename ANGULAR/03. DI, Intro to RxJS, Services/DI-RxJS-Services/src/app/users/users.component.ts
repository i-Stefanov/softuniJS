import { Component, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() users: User[] = [];
}
