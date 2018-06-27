export class SubmissionServiceClient {

  createSubmission(username, answers, formId) {
    const submission = {
      username: username,
      formId: formId,
      formData: answers
    };
    return fetch('http://localhost:4000/api/submission', {
      body: JSON.stringify(submission),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }


  findSubmissionsForForm(formId) {
    return fetch('http://localhost:4000/api/form/'+formId+'/submission', {
      credentials: 'include', // include, same-origin, *omit
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findSubmissionById(submissionId) {
    return fetch('http://localhost:4000/api/submission/'+submissionId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

}
