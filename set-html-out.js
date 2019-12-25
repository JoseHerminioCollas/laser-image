function setHTMLOut(out) {
  http.createServer(function (req, res) {
    var html = `<!DOCTYPE html>
    <html>
     <head>
     <style>
     div {
       font-size: 5px;
       position: absolute;
    }
     </style>
     </head>
     <body>      
      ${
      out.map((element, colI) => {
        let str = ''
        str += element.map((e ,rowI) => {
          return `<div 
            style="
            top:${colI * 5}px ; 
            left: ${rowI * 5}px ;
            color: ${e.name};
            background-color:none">&#11044;</div>`
        }).join('')
        // str += '<br>'
        return str
      })
        .join('')
      }
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
