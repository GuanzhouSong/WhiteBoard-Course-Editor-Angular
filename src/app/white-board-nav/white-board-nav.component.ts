import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-white-board-nav',
  templateUrl: './white-board-nav.component.html',
  styleUrls: ['./white-board-nav.component.css']
})
export class WhiteBoardNavComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) {
  }

  isCollapsed = false;
  isLoggedIn = false;
  isAdmin = false;
  user;

  ngOnInit() {
    this.service.profile()
      .then(response => response.json())
      .then((data) => {
        if (data._id) {
          this.isLoggedIn = true;
          if(data.username === 'admin') {
            this.isAdmin = true;
          }
        }
      })
      .catch((error) => {
        this.isLoggedIn = false;
      });
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }

}
