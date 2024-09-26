import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDetail } from '../service/user-data';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { UserFormComponent } from "./user-form/user-form.component";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    UserFormComponent
],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {

  public users: UserDetail[] = [];
  userData: Subscription = new Subscription;
  constructor(private userService: UserService,
    private router: Router
    //private toastr: ToastrService
  ) {}

  ngOnDestroy(): void {
    this.userData.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  onDelete(id: number): void {
    if(!id || id === 0) return;
    this.userService.deleteUserData(id);
    this.getAllUser();
  }

  onAdd(): void {
    this.router.navigate(['addUser']);
  }
  onEdit(id: number): void {
    this.router.navigate(['editUser', id])
  }

  refresh(): void {
    localStorage.removeItem('userData');
    this.getAllUser();
  }

  private getAllUser(): void {
    this.userData = this.userService.getAllUser().subscribe(res => this.users = res);
  }
}
