// classic basic express server
// use pm2 to manage cluster
// $ npm i -g pm2
// $ pm2 list
// $ pm2 start index_classic.js -i 0 // <<< let pm2 decided how many instances to start automatically
// $ pm2 delete index_classic.js // <<< stop pm2

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
