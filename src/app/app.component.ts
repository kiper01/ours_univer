import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CallRequestComponent } from "./call-request/call-request.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, CallRequestComponent, CommonModule]
})
export class AppComponent {
  title = 'ours_univer';

  callRequestOpen: boolean = false;

  openCallRequest() {
    this.callRequestOpen = true;
  }

}