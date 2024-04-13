import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnrolleelkComponent } from "./enrolleelk/enrolleelk.component";

export const routes: Routes =[
    { path: "", component: LoginComponent},
    { path: "1", component: EnrolleelkComponent},
    { path: "**", component: LoginComponent }
];