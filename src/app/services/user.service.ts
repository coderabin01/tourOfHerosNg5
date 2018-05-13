import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  getUsers() {
    console.log('get users');
    return ['user1', 'user2', 'user55'];
  }
}
