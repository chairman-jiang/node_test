const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Http Server');
  res.end();
});

server.listen(8080, () => {
  console.log('the server is runing port 8000...');
});
