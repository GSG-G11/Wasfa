const request = require('supertest');
const app = require('../app');

describe('testing GET Methods', () => {
  it('/search-?recipe route should return 200 & htmlPage response', (done) => {
    request(app)
      .get('/search-recipe')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((err, res) => {
        if (err) return done(err);

        expect(res.statusCode).toEqual(200);
        return done();
      });
  });
});
