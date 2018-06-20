export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
