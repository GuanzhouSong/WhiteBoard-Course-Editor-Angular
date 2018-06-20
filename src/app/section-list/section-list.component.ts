import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: UserServiceClient, private sectionService: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }
  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  loggedInUsersSections = [];
  isLoggedIn = false;
  isAdmin = false;
  user ;

  loadSections(courseId) {
    this.courseId = courseId;
  }

  enroll(section) {
    this.sectionService
      .enrollStudentInSection(this.user._id, section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
    this.service.profile()
      .then(response => response.json())
      .then((data) => {
        if (data._id) {
          this.user = data;
          this.isLoggedIn = true;
          if (data.username === 'admin') {
            this.isAdmin = true;
          }

          this.sectionService
            .findSectionsForStudent()
            .then(loggedInUsersSections => {
              this.loggedInUsersSections = loggedInUsersSections;
              this.sectionService
                .findSectionsForCourse(this.courseId)
                .then(sections => {
                  this.sections = sections;
                  this.sections.map(s => {
                    if (this.containsObject(s, this.sections)) {
                      s['hide'] = true;
                    } else {
                      s['hide'] = false;
                    }
                    console.log(this.sections);
                  });
                });
            });



        } else {
          this.router.navigate(['login']);
        }
      })
      .catch((error) => {
        this.router.navigate(['login']);
      });
  }

  containsObject(obj, list) {
    var x;
    for (x in list) {
      if (list.hasOwnProperty(x) && list[x] === obj) {
        return true;
      }
    }
    return false;
  }
  //https://stackoverflow.com/questions/4587061/how-to-determine-if-object-is-in-array

}
