import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() activeUser!: any;

  constructor() { }

  ngOnInit() {
    console.log("my activeUser", this.activeUser);
  }

}
