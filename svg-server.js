var http = require('http');

function SVGServer(contentString = '') {
  http.createServer(function (req, res) {
    var html = `<!DOCTYPE html>
    <html>
     <head>
     <style>
     body {
       background: black;
       display: flex;
       justify-content: center;
     }
     svg {
       transform:scale(1.0);
       height: 600px;
    }
     </style>
     </head>
     <body>      
     <svg viewBox="0 0 100 149" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
     ${contentString}
      </svg>
      </body>
    </html>`

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
      'Expires': new Date().toUTCString()
    });
    res.end(html);
  }).listen(8080);
}

module.exports = SVGServer
