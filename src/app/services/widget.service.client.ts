export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
