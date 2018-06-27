import { Component, OnInit } from '@angular/core';
import {SubmissionServiceClient} from "../services/submission.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  constructor(private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => this.setParams(params));
  }

  username;
  formId = -1;
  submissions;

  setParams(params) {
    this.userService
      .profile()
      .then(response => response.json())
      .then(user => {
        if (user['success'] === false) {
          this.router.navigate(['login']);
        }
        this.username = user.username;
      })
      .then(() => {
        this.formId = params['formId'];
        return this.submissionService.findSubmissionsForForm(this.formId);
      })
      .then(submissions => {
        this.submissions = submissions;
        console.log(this.submissions)
      });
  }

  ngOnInit() {  }

}
