export class FormWidgetServiceClient {
  findFormWidgets() {
    return fetch('http://localhost:8080/api/form')
      .then(response => response.json());
  }

  findFormWidgetById(id) {
    return fetch('http://localhost:8080/api/form/'+id)
      .then(response => response.json());
  }
}
