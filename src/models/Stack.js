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
    return new Promise((resolve, reject) => {
      client.lpop('ttt', (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
};
