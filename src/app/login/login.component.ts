import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Инициализация переменной
  password: string = ''; // Инициализация переменной

  constructor() { }

  login() {
    // Ваша логика аутентификации
  }
}

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
