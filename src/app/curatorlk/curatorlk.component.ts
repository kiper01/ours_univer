import { Component } from '@angular/core';
import { Call } from '../Entities/Call';
import { CommonModule } from '@angular/common';
import { CallComponent } from "../call/call.component";

@Component({
    selector: 'app-curatorlk',
    standalone: true,
    templateUrl: './curatorlk.component.html',
    styleUrl: './curatorlk.component.css',
    imports: [CommonModule, CallComponent]
})
export class CuratorlkComponent {
  calls: Call[]=[
        { name: 'asd' , programName:'Направление 1', phoneNumber:'7989498798'},
        { name: '3sda' , programName:'Направление 1', phoneNumber:'798949328798'},

        { name: 'fdfdfd' , programName:'Направление 2', phoneNumber:'777777777'}
    ]
}
