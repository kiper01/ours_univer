import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Call } from '../Entities/Call';

@Component({
  selector: 'app-call',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call.component.html',
  styleUrl: './call.component.css'
})
export class CallComponent {
  @Input() call!: Call;
}
