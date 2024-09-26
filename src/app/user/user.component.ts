import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../service/user-data';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { UserFormComponent } from "./user-form/user-form.component";
import { Router } from '@angular/router';
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
export class UserComponent implements OnInit {

  public users: UserDetail[] = [];
  constructor(private userService: UserService,
    private router: Router
    //private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getUserData().then(res => this.users = res);

  }

  onDelete(id: number): void {
    let delUser = this.users.find(x => x.id === id);

    if (delUser) {
      this.userService.deleteUserData(id);
      this.userService.getUserData().then(res => this.users = res);
      //this.users = this.userService.getUserData();
      //this.toastr.success('User deleted successfully!');
    } else {
      //this.toastr.error('User is not valid to delete', 'Toastr fun!');
    }
  }
  onAdd() {
    this.router.navigate(['addUser']);
  }
  onEdit(id: number) {
    this.router.navigate(['editUser', id])
    
  }

  refresh() {
    localStorage.removeItem('userData');
    this.userService.getUserData().then(res => this.users = res);
  }
}
