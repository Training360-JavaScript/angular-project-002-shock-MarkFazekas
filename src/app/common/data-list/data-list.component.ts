import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter<User>();
  @Output() updateClick: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter<User>();

  onSelectClick(dataRow: User): void{
    this.selectClick.emit(dataRow)
  }
  onUpdateClick(dataRow: User): void{
    this.updateClick.emit(dataRow)
  }
  onDeleteClick(dataRow: User): void{
    this.deleteClick.emit(dataRow)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
