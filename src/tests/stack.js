/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server.js');
chai.use(chaiHttp);

describe('Stack', () => {
  const data = 'test data';

  it('Add item to the stack', (done) => {
    chai.request(server)
      .post('/stack/item')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        text: data,
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Get previously added item from the stack', (done) => {
    chai.request(server)
      .get('/stack/item')
      .end((err, res) => {
        res.text.should.equal(data);
      });

    done();
  });
});
