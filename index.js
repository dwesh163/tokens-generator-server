const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      const email = formData.email || '';

      console.log(email);

      const responseText = `Token generated for email: ${email}`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(responseText);

      return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (d) => {
              resolve(d);
            })
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(data);
        req.end();
    })
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 8888;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
