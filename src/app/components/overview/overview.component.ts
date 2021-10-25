import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  //for login component
  loggedInUser!: any;
  loadingIndicator: boolean = false

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //for login component
  getUsers() {
    this._usersService.getAllUsers()
    .subscribe(
      response => {
        console.log(response);
        this.loggedInUser = response[0];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 1500);
       
      },
      error => {
        console.log(error);
      });
  }

}
