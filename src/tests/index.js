/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../../server.js');
chai.use(chaiHttp);


describe('/GET book', (done) => {
  it('check if server is running', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
});
