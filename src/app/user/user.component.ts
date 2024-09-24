import { Component, OnInit } from '@angular/core';
import { userData, UserDetail } from '../service/user-data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  public users: UserDetail[] = [];
  constructor(){}

  ngOnInit(): void {
    this.users = userData;
  }
}
