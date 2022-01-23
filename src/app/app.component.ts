import {Component, Input} from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  dataList: User[] = [];
  currentUser: User = new User();

  constructor(private userService: UserService) {
    this.dataList = userService.list;
  }

  onSelectClick(dataRow: User): void{
    console.log(dataRow);
    this.currentUser = dataRow;
  }
  onUpdateClick(dataRow: User): void{
    console.log(dataRow);
    this.userService.updateUser(dataRow);
  }
  onDeleteClick(dataRow: User): void{
    console.log(dataRow);
    this.userService.removeUser(dataRow);
  }

}
