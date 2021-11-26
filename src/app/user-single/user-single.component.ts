import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/models/ObjInterface';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: IUser;
  @Output() clk = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

}
