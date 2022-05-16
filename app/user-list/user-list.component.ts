import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UserService} from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user!: User[];

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.getUsersList();
  }
    
    private getUsersList(){
      this.userService.getUsersList().subscribe(data =>{
        this.user=data;
      })
    }
}

