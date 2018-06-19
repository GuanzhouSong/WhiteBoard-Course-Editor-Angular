export class SectionServiceClient {

  COURSE_SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  SECTION_URL = 'http://localhost:4000/api/section/SECTIONID';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
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
