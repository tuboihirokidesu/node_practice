import http from 'http';

http
  .createServer((request, response) => {
    response.end('hello typescript&node');
  })
  .listen(3000, () => console.log('server started'));
