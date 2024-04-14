import { Routes } from '@angular/router';
import { EnrolleelkComponent } from "./enrolleelk/enrolleelk.component";
import { AppComponent } from './app.component';
import { AdminlkComponent } from './adminlk/adminlk.component';
import { CuratorlkComponent } from './curatorlk/curatorlk.component';
import { EnrolleelkprofileComponent } from './enrolleelkprofile/enrolleelkprofile.component';

export const routes: Routes =[
    { path: "", component: AppComponent },
    { path: "Enrolleelk", component: EnrolleelkComponent },
    { path: "EnrolleelkProfile", component: EnrolleelkprofileComponent },
    { path: "Adminlk", component: AdminlkComponent },
    { path: "Curatorlk", component: CuratorlkComponent },
    { path: 'Courses', redirectTo: 'https://dpo.dvfu.ru/' },
    { path: "**", component: AppComponent }
];