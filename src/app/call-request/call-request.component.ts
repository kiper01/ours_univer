import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-call-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-request.component.html',
  styleUrl: './call-request.component.css'
})
export class CallRequestComponent {

  @Input() callRequestOpen: boolean = false;

  closeCallRequest() {
    this.callRequestOpen = false;
  }
}
