export class SectionServiceClient {

  API_DOMAIN = 'http://localhost:4000';
  COURSE_SECTION_URL = this.API_DOMAIN + '/api/course/COURSEID/section';
  SECTION_URL = this.API_DOMAIN + '/api/section/SECTIONID';

  findSectionsForStudent() {
    const url = this.API_DOMAIN + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(studentId, sectionId) {
    const url = this.API_DOMAIN + '/api/student/' + studentId + '/section/' + sectionId;
    return fetch(url, {
      method: 'POST',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(studentId, sectionId) {
    console.log("Unenrolling");
    const url = this.API_DOMAIN + '/api/student/' + studentId + '/section/' + sectionId;
    return fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats, 'usedSeats': 0};
    return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  editSection(section, updateObject) {
    return fetch(this.SECTION_URL.replace('SECTIONID', section._id), {
      method: 'PUT',
      body: JSON.stringify(updateObject),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(section) {
    return fetch(this.SECTION_URL.replace('SECTIONID', section._id), {
      method: 'DELETE',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
