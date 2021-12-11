import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/models/ObjInterface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail?: IUser;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
