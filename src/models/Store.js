const redis = require('redis');

const client = redis.createClient(6379);

module.exports = class Store {
  // @param {String} key
  // @param {String} value
  // @param {Integer} time
  // @return void
  set(key, value, time) {
    client.set(key, value, 'EX', time);
  }

  // @param {Integer} key
  // @return Promise
  get(key) {
    return new Promise(function (resolve, reject) {
      client.get(key, (err, reply) => {
      // reply is null when the key is missing
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  // @param {Integer} key
  delete(key) {
    client.del(key);
  }
};
