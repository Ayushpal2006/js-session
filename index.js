const session = require('express-session');

class Session {
  constructor(app) {
    // Initialize express-session middleware
    app.use(session({
      secret: 'your-secret-key',  // Replace this with a secure key
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }  // Set this to true if you're using HTTPS
    }));
  }

  // Frontend session handling (browser sessionStorage)
  static set(name, value) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(name, JSON.stringify(value));
    }
  }

  static get(name) {
    if (typeof window !== 'undefined') {
      if (name) {
        const value = sessionStorage.getItem(name);
        return value ? JSON.parse(value) : null;
      }
      const entries = { ...sessionStorage };
      for (const key in entries) {
        entries[key] = JSON.parse(entries[key]);
      }
      return entries;
    }
  }

  static remove(name) {
    if (typeof window !== 'undefined') {
      if (name) {
        sessionStorage.removeItem(name);
      } else {
        sessionStorage.clear();
      }
    }
  }

  // Server-side session handling
  static setServerSession(req, key, value) {
    req.session[key] = value;
  }

  static getServerSession(req, key) {
    return req.session[key];
  }

  static removeServerSession(req, key) {
    delete req.session[key];
  }
}

module.exports = Session;
