import { Component, Input } from '@angular/core';
import { User } from 'types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo App';

  users: User[] = [
    { name: 'Ivan', age: 34 },
    { name: 'Sisi', age: 28 },
    { name: 'Gogo', age: 32 },
  ];

  addUser(inputName:any, inputAge:any) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    this.users.push(user);
  }
}
