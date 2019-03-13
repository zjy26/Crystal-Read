import request from 'superagent';

class Http {
  constructor() { }

  get(url, onSuccess, onFailed) {
    console.log('Get ' + url + ' started.');
    request
      .get(url)
      .end((err, res) => {
        if (err) {
          onFailed && onFailed(err);
        } else {
          onSuccess && onSuccess(res.body)
        }
      });
  }

  post(url, params, onSuccess, onFailed) {
    console.log('Post ' + url + ' started.');
    request
      .post(url)
      .send(params)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin','*')
      .end((err, res) => {
        if (err) {
          onFailed && onFailed(err);
        } else {
          onSuccess && onSuccess(res.body);
        }
      });
  }
}

export const http = new Http();
