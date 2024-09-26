import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';

export const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'user-detail', component: UserComponent },
    { path: 'addUser', component: UserFormComponent },
    { path: 'editUser/:id', component: UserFormComponent }
    
];
