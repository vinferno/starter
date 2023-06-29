import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public users = this.usersService.getUsers();
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }



}
