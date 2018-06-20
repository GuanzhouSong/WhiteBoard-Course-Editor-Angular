export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('http://cs5610-summer1-2018-patel.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
