export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
