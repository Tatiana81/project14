// errors/authorization-err.js

class AuthorError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = AuthorError;
