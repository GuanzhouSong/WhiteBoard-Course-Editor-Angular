export class TopicServiceClient {
  findTopicsForLesson(lessonId) {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
