import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import swal from "sweetalert";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  login(username, password) {
    console.log([username, password]);
    this.service
      .login(username, password)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (myJson.success === false) {
          swal("Error!", myJson.message, "error");
        } else {
          this.router.navigate(['profile']);
        }
      });
  }

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
  }

}
