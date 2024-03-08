import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  get isLogged(): boolean {
    return !!this.user;
  }
  constructor() {
    try {
      const lsUser = localStorage.getItem(environment.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'john',
    };
    localStorage.setItem(environment.USER_KEY, JSON.stringify(this.user));
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(environment.USER_KEY);
  }
}
