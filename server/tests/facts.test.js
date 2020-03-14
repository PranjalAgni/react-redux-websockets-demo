const request = require('supertest');
const app = require('../src/app');

describe('Facts Endpoint', () => {
  it('should returns fact array', async done => {
    jest.setTimeout(30000);
    const res = await request(app)
      .get('/api/v1/facts')
      .send();

    expect(res.statusCode).toEqual(200);
    expect(typeof res.body).toBe('string');
    done();
  });
});
