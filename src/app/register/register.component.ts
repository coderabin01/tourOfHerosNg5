import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any = [];
  registerForm: FormGroup;
  userTypes = ['User1', 'User2', 'User3', 'User4'];
  btnText: string = 'Ok';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.formValidation();
    this.getUsers();
    this.saveUsers();
  }
  formValidation(){
    this.registerForm = new FormGroup({
      userType: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }
  getUsers() {
    this.users = this.userService.getUsers()
      .map(users => this.users = users);
  }
  saveUsers() {
  }
}
