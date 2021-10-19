const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('Unit testing the /posts route', () => {

  it('should return OK status', () => {
    return request(app)
      .get('/posts')
      .then((response) => {
          assert.equal(response.status, 200)
      })
  });

});