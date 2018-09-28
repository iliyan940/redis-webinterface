/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server.js');
chai.use(chaiHttp);

describe('Store', () => {
  const key = 'key1';
  const value = 'value1';
  const time = 10;

  const data = {
    key,
    value,
    time,
  };

  it('Add item to the store', (done) => {
    chai.request(server)
      .post('/store/item')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Get previously added item from the store', (done) => {
    chai.request(server)
      .get(`/store/item?key=${key}`)
      .end((err, res) => {
        res.text.should.equal(value);
        done();
      });
  });
});
