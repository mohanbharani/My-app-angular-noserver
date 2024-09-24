import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'user-detail', component: UserComponent }
];
