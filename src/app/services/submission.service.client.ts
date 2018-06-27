export class SubmissionServiceClient {
  createSubmission(username, form) {
    const submission = {
      username: username,
      formId: form.id,
      formData: form
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(submission),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
