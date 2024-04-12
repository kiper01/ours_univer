import { Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import { EducationProgram } from '../Entities/EducationProgram';
import { EnrolleeRequest } from '../Entities/Request';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})

export class RequestComponent { 
  
  @Input() request!: EnrolleeRequest;
  // @Output() close = new EventEmitter<Request>();

  cancel()
  {
      this.request.state = 'Отменена'
  }
}

