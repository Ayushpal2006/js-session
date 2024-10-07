<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
<body>

<h1>js-session</h1>

<p><strong>js-session</strong> is an npm package that provides session management for both frontend (using <code>sessionStorage</code>) and backend (using <code>express-session</code> in Node.js).</p>

<h2>Features</h2>

<ul>
  <li><strong>Frontend (Browser):</strong>
    <ul>
      <li><code>Session.set(name, value)</code> - Set a session value in the browser's sessionStorage.</li>
      <li><code>Session.get(name)</code> - Retrieve a specific session value or all values.</li>
      <li><code>Session.remove(name)</code> - Remove a specific session value or clear all session values.</li>
    </ul>
  </li>
  <li><strong>Backend (Node.js with Express):</strong>
    <ul>
      <li><code>Session.setServerSession(req, key, value)</code> - Set a session value on the server.</li>
      <li><code>Session.getServerSession(req, key)</code> - Retrieve a specific session value from the server.</li>
      <li><code>Session.removeServerSession(req, key)</code> - Remove a specific session value from the server.</li>
    </ul>
  </li>
</ul>

<h2>Installation</h2>

<pre><code>npm install js-session
</code></pre>

<h2>Usage</h2>

<h3>Client-side (Browser):</h3>

<pre><code>import Session from 'js-session';

// Set a session value
Session.set('username', 'JohnDoe');

// Get a specific session value
const username = Session.get('username');

// Get all session values
const allSessions = Session.get();

// Remove a specific session value
Session.remove('username');

// Clear all sessions
Session.remove();
</code></pre>

<h3>Server-side (Express):</h3>

<pre><code>const express = require('express');
const Session = require('js-session');

const app = express();
const session = new Session(app);

app.get('/set-session', (req, res) => {
  Session.setServerSession(req, 'username', 'JohnDoe');
  res.send('Session set!');
});

app.get('/get-session', (req, res) => {
  const username = Session.getServerSession(req, 'username');
  res.send(`Session value: ${username}`);
});

app.get('/remove-session', (req, res) => {
  Session.removeServerSession(req, 'username');
  res.send('Session removed!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
</code></pre>

<h2>License</h2>

<p>MIT</p>

</body>
</html>
