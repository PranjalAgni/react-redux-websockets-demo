const request = require('supertest');
const app = require('../src/app');

describe('Search endpoint', () => {
  it('should return gif array', async done => {
    jest.setTimeout(30000);
    const res = await request(app)
      .post('/api/v1/search')
      .send({
        data: {
          search: 'butterfly'
        }
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(typeof res.body).toEqual('object');
    expect(typeof res.body.data).toEqual('object');
    done();
  });
});
