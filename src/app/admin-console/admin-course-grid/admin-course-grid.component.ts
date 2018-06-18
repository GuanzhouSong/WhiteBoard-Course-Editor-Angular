import { Component, OnInit } from '@angular/core';
import {Course} from "../../models/coruse.model.client";
import {CourseServiceClient} from "../../services/course.service.client";
import {SectionServiceClient} from "../../services/section.service.client";

@Component({
  selector: 'app-admin-course-grid',
  templateUrl: './admin-course-grid.component.html',
  styleUrls: ['./admin-course-grid.component.css']
})
export class AdminCourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, private sectionService: SectionServiceClient) { }

  courses = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
        var promises = [];
        promises = this.courses.map((course, index) => {
          return this.sectionService
            .findSectionsForCourse(course.id)
            .then(sections => {
              course['sections'] = sections;
              return course;
            });
        });
        Promise.all(promises).then(ccc => this.courses = ccc);
      });
  }

}
