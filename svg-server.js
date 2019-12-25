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
     </style>
     </head>
     <body>      
     ${contentString}
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
