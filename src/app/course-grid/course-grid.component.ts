import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: UserServiceClient, private courseService: CourseServiceClient, private sectionService: SectionServiceClient) {
  }

  courses: Course[] = [];
  isLoggedIn = false;
  isAdmin = false;
  studentSections = [];
  studentCourses = [];
  user;

  uniqEs6 = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
  };

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
        }
      })
      .catch((error) => {
        this.isLoggedIn = false;
      });
    this.courseService.findAllCourses()
      .then(courses => {
        this.courses = courses;
      })
      .then(() => {
        this.sectionService
          .findSectionsForStudent()
          .then(studentSections => {
            this.studentSections = studentSections;
            var c,s;
            for (c = 0; c < this.courses.length; c++) {
              for (s = 0; s < this.studentSections.length; s++) {
                if (this.courses[c]['id'] === this.studentSections[s]['courseId']) {

                  this.studentCourses.push(this.courses[c]);
                }
              }
            }
            this.studentCourses = this.uniqEs6(this.studentCourses);
          });
      });
  }

}
