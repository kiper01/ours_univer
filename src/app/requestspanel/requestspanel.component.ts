import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RequestComponent } from "../request/request.component";
import { EducationProgram } from '../Entities/EducationProgram';
import { EnrolleeRequest } from '../Entities/Request';


@Component({
    selector: 'app-requestspanel',
    standalone: true,
    templateUrl: './requestspanel.component.html',
    styleUrl: './requestspanel.component.css',
    imports: [RequestComponent, NgFor]
})

export class RequestspanelComponent {
  
  filter: 'all' | 'active' | 'done' = 'all';

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
  ];

  get items() {
      return this.requests;
  }

}
