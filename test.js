const crypt = require('crypto');
console.log(crypt.randomBytes(32).toString('hex'));