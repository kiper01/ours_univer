import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RequestComponent } from "../request/request.component";
import { EnrolleeRequest } from '../Entities/Request';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-enrolleelk',
    standalone: true,
    templateUrl: './enrolleelk.component.html',
    styleUrl: './enrolleelk.component.css',
    imports: [CommonModule, RequestComponent, RouterLink, RouterOutlet]
})
export class EnrolleelkComponent {
    isRequestsOpen: boolean = true;
    isProfileOpen: boolean = false;

    openRequests(){
        this.isRequestsOpen = true;
        this.isProfileOpen = false;
    }
    
    requests: EnrolleeRequest[] = [
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 1',
          price: 100000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' },
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 2',
          price: 7000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' },
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 3',
          price: 80000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' },
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 1',
          price: 100000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' },
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 2',
          price: 7000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' },
        { program: { 
          type: 'Общеразвивающая программа' ,
          format: 'Онлайн',
          direction: 'НАПРАВЛЕНИЕ 3',
          price: 80000,
          educationStartMonth: 'МАЙ'}, 
        state: 'В работе' }  
      ];
    
      get items() {
          return this.requests;
      }

    openProfile(){
      
    }

    openCourses(){
      
    }
}
