import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import {Credentials} from "../../interfaces/Credentials";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @Input() loginFailedMessage: string | null = null;

  @Output() loginEvent = new EventEmitter<Credentials>();
  login(): void {
    this.loginEvent.next({username:this.username, password:this.password});
  }

  username :string;
  password :string;

  constructor() {
    this.username = "TVH";
    this.password = "Test1254";
  }

  ngOnInit(): void {}

}
