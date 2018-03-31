// by default the thread pool size is 4.
// executing below will console.log() the first 4 at once first.
// updating UV_THREADPOOL_SIZE will affect the concurency as crypto.pbdf2 function
// is executed externally by libuv

// process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
})
