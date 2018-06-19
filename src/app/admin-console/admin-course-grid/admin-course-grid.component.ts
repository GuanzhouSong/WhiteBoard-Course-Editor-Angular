import {Component, OnInit} from '@angular/core';
import {Course} from "../../models/coruse.model.client";
import {CourseServiceClient} from "../../services/course.service.client";
import {SectionServiceClient} from "../../services/section.service.client";
import swal from 'sweetalert';


@Component({
  selector: 'app-admin-course-grid',
  templateUrl: './admin-course-grid.component.html',
  styleUrls: ['./admin-course-grid.component.css']
})
export class AdminCourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, private sectionService: SectionServiceClient) {
  }

  courses = [];

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
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

  createSection(course) {
    this
      .sectionService
      .createSection(course.id, course.title + ' Section 1', 50)
      .then(() => {
        this.fetchCourses();
      });
  }

  editSection(newValue, type, section) {
    if (type === 'name') {
      this.sectionService.editSection(section, {name: newValue})
        .then(() => {
          this.fetchCourses();
        });
    } else if (type === 'seats') {
      this.sectionService.editSection(section, {seats: newValue})
        .then(() => {
          this.fetchCourses();
        });
    }
  }

  deleteSection(course, section) {
    this.sectionService.deleteSection(section)
      .then(() => {
        this.courses.map((c, i) => {
          if (c.id === course.id) {
            let sections = [];
            c.sections.map(s => {
              if (s._id === section._id) {
                console.log("Deleting");
              } else {
                sections.push(s);
              }
            });
            c["sections"] = sections;

          }
          return c;
        });
      });
  }

}
