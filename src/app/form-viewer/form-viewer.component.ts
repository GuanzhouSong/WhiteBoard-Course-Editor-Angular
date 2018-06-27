import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormWidgetServiceClient} from "../services/formWidget.service.client";
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {SubmissionServiceClient} from "../services/submission.service.client";

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit {

  constructor(private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient,
              private service: FormWidgetServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => this.setParams(params));
  }

  form = {id: -1, elements: []};
  topicId = -1;
  submission = [];
  username = -1;
  counter=0;

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
        return this.service.findFormWidgetById(params['formId']);
      })
      .then(form => {
        this.form = form;
        this.topicId = form.topic.id;
        this.submission = form.elements;
        this.submission = this.submission.map((element, index) => {
          element['sAnswer'] = '';
          element['sAnswerList'] = [];
          return element;
        });
        console.log(this.submission);
      });
  }

  ngOnInit() {
  }


  splitter(element) {
    return element.options.split(/(?!\(.*)\n(?![^\[]*?\])/g);
  }

  submitForm() {
    this.submissionService.createSubmission(this.username, this.submission, this.form.id)
      .then(() => {
        alert("Submitted");
        this.router.navigate(['forms']);
      })
      .catch(() => alert("Request Failed to Mongo Server"));
    console.log(this.submission);
  }

  cancelForm() {
    this.router.navigate(['forms']);
  }

  changeAnswer(ev,el) {
    this.submission.map(element => {
      if (element.id === el.id) {
        element.sAnswer = ev.target.value;
      }
      return element;
    });
  }

  changeAnswerList(ev, el, opt) {
    this.submission.map(element => {
      if (element.id === el.id) {
        if(ev.target.checked) {
          element.sAnswerList.push(opt);
        } else {
          element.sAnswerList = element.sAnswerList.filter(e => e !== opt);
        }
      }
      return element;
    });
  }

}
