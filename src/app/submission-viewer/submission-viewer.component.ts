import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SubmissionServiceClient} from "../services/submission.service.client";
import {FormWidgetServiceClient} from "../services/formWidget.service.client";

@Component({
  selector: 'app-submission-viewer',
  templateUrl: './submission-viewer.component.html',
  styleUrls: ['./submission-viewer.component.css']
})
export class SubmissionViewerComponent implements OnInit {

  constructor(private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient,
              private formService: FormWidgetServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => this.setParams(params));
  }

  username;
  formId = -1;
  form = {id:'', name:''};
  submissionId = -1;
  submission = {_id:'',username:'',formData:[]};

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
        this.submissionId = params['submissionId'];
        return this.submissionService.findSubmissionById(this.submissionId);
      })
      .then(submission => {
        this.submission = submission;
      })
      .then(() => {
        return this.formService.findFormWidgetById(this.formId);
      })
      .then(form => {
        this.form = form;
        console.log(this.form);
      });
  }

  ngOnInit() {
  }

}
