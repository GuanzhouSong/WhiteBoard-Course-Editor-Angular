export class ModuleServiceClient {
  MODULE_URL = 'http://cs5610-summer1-2018-patel.herokuapp.com/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
