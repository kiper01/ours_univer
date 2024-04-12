import { Component } from '@angular/core';
import { LeftpanelComponent } from "../leftpanel/leftpanel.component";
import { RequestspanelComponent } from "../requestspanel/requestspanel.component";
import { ProfilepanelComponent } from "../profilepanel/profilepanel.component";

@Component({
    selector: 'app-enrolleelk',
    standalone: true,
    templateUrl: './enrolleelk.component.html',
    styleUrl: './enrolleelk.component.css',
    imports: [LeftpanelComponent, RequestspanelComponent, ProfilepanelComponent]
})
export class EnrolleelkComponent {

}
