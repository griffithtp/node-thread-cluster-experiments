// Manually handle node clusters
// by invoking X number of cluster forks
// This does not alway mean faster execution
// Use PM2 module instead to handle clusters and monitor

process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

// Is file executed in master mode?
if (cluster.isMaster) {
  // cause index.js to be exec\ again but in child mode
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();

} else {
  // I'm a child and going to act like a server and nothing else
  const express = require('express');
  const crypto = require('crypto');
  const app = express();

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('hi')
    })
  });

  app.get('/fast', (req, res) => {
    res.send('this was fast');
  })

  app.listen(3000);

}
