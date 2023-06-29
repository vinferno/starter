import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = this.usersService.getUsers();

  constructor(
    private usersService: UsersService
  ) { }


  ngOnInit(): void {
   
  }


}
