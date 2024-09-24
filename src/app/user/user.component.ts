import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../service/user-data';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
//import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,  
    //ToastrModule
  ],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  public users: UserDetail[] = [];
  constructor(private userService: UserService,
    //private toastr: ToastrService
  ){
    
  }

  ngOnInit(): void {
    this.userService.getUserData().then(res =>  this.users = res);
    
  }

  onDelete(id: number): void{
    let delUser = this.users.find(x => x.id === id);

    if(delUser){
      this.userService.deleteUserData(delUser);
      //this.users = this.userService.getUserData();
      //this.toastr.success('User deleted successfully!');
    } else{
      //this.toastr.error('User is not valid to delete', 'Toastr fun!');
    }
      



    console.log(this.users);
  }
}
