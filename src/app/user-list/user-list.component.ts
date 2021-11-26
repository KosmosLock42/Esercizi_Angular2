import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/models/ObjInterface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users!: IUser[];
  @Output() clk = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

}
