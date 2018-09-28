/* eslint-disable */
const redis = require('redis');
const client = redis.createClient(6379);

module.exports = class Stack {
   // @param {String} text
   // @return void
  push(text) {
			  client.lpush('ttt', text);
  }

  // @return {String} data
  pop() {
  	return new Promise(function(resolve, reject){
  		client.lpop('ttt', (error, data) => {
				    if (error) {
				      return error;
				    } else {
				      resolve(data);
				    }
				  });	
  	});				  
  }
}
