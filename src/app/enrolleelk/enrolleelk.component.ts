import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RequestspanelComponent } from "../requestspanel/requestspanel.component";
import { ProfilepanelComponent } from "../profilepanel/profilepanel.component";

@Component({
    selector: 'app-enrolleelk',
    standalone: true,
    templateUrl: './enrolleelk.component.html',
    styleUrl: './enrolleelk.component.css',
    imports: [RequestspanelComponent, ProfilepanelComponent,CommonModule]
})
export class EnrolleelkComponent {
    isRequestsOpen: boolean = true;
    isProfileOpen: boolean = false;

    openRequests(){
        this.isRequestsOpen = true;
        this.isProfileOpen = false;
    }

    openProfile(){
        this.isRequestsOpen = false;
        this.isProfileOpen = true;
    }
}
