import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnrolleelkComponent } from "./enrolleelk/enrolleelk.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EnrolleelkComponent]
})
export class AppComponent {
  title = 'ours_univer';
}
