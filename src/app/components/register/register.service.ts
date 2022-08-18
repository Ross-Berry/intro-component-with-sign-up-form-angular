import { Injectable } from '@angular/core';
import { USERS } from './../../mock-users';
import { User } from './../../User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}