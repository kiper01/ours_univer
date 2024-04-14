import { Routes } from '@angular/router';
import { EnrolleelkComponent } from "./enrolleelk/enrolleelk.component";
import { AppComponent } from './app.component';
import { AdminlkComponent } from './adminlk/adminlk.component';
import { CuratorlkComponent } from './curatorlk/curatorlk.component';

export const routes: Routes =[
    { path: "", component: AppComponent },
    { path: "Enrolleelk", component: EnrolleelkComponent },
    { path: "Adminlk", component: AdminlkComponent },
    { path: "Curatorlk", component: CuratorlkComponent },
    { path: "**", component: AppComponent }
];