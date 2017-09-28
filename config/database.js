const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  // uri: 'mongodb://localhost:27017/mean-angular-2', // Databse URI and database name
  uri: 'mongodb://ttsherpa:Sbtibetan1996@ds153494.mlab.com:53494/blogger-world',//production
  secret: crypto, // Cryto-created secret
  db: 'blogger-world' // Database name
}
