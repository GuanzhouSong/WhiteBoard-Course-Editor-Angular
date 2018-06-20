import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) {
  }

  user = {};
  username;
  password;
  firstName;
  lastName;
  phone;
  email;
  address;
  sections = [];

  update() {
    this.service
      .updateUser(this.username, this.firstName, this.lastName, this.phone, this.email, this.address)
      .then(() => swal("Updated Successfully"));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(response => response.json())
      .then(user => {
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.phone = user.phone;
          this.address = user.address;
        }
      )
      .catch((error) => {
        swal("Please Login To Continue")
          .then(() => {
            this.router.navigate(["login"]);
          });
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;
        console.log(this.sections);
      });
  }

}
