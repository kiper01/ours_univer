import { Routes } from '@angular/router';
import { EnrolleelkComponent } from "./enrolleelk/enrolleelk.component";
import { AppComponent } from './app.component';

export const routes: Routes =[
    { path: "", component: AppComponent},
    { path: "1", component: EnrolleelkComponent},
    { path: "**", component: AppComponent }
];