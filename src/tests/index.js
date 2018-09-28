const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);


describe('/GET book', () => {
      it('it should GET all the books', () => {
      	let a = 0;
       	a.should.be.eql(0);
       	
      });
});