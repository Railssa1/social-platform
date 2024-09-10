import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: "1",
      name: "Raissa"
    },
    {
      id: "1",
      name: "Kassia"
    },
  ];

  constructor() { }

  getUsers(){
    return of(this.users);
  }
}

export interface User {
  id: string;
  name: string;
}
