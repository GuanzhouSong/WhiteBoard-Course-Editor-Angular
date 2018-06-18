import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  username;
  password;
  password2;

  register(username, password, password2) {
    if (password !== password2) {
      swal("Error!", "Password Doesnt Match", "error");
      return;
    }
    this.service
      .createUser(username, password)
      .then(response => response.json())
      .then((myJson) => {
        if (myJson['success'] === false) {
          swal("Error!", myJson['message']);
          return;
        } else {
          this.router.navigate(['profile']);
        }
      });
  }

  ngOnInit() {
  }

}
