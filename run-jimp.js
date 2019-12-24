var Jimp = require('jimp');
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-small.png'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const fD = 'color-chart.jpg'
var http = require('http');

const circle = `
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />
  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>`
function setSVGOut(out) {
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
     ${
      out.map((element, colI) => {
        let str = ''
        str += element.map((e ,rowI) => {
          return `<circle
            r="0.5"
            cx="${rowI}" 
            cy="${colI}"
            fill="${e.name}"
            stroke="none"
            />`
        }).join('')
        // str += '<br>'
        return str
      })
        .join('')
      }
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


Jimp.read(fA)
  .then(lenna => {
    const out = [...Array(149)].map(() => [...Array(100)])
    for (const { x, y, idx, img } of lenna.scanIterator(
      0, 0, 100, 149
    )) {
      const colors = [
        {
          name: 'red',
          val: lenna.bitmap.data[idx + 0],
          symbol: 'r'
        }, {
          name: 'green',
          val: lenna.bitmap.data[idx + 1],
          symbol: 'g'

        }, {
          name: 'blue',
          val: lenna.bitmap.data[idx + 2],
          symbol: 'b'
        },
        {
          name: 'white',
          symbol: 'X'
        },
        {
          name: 'black',
          symbol: ' '
        }, {
          name: 'unknown',
          symbol: '?'
        }
      ]
      let selectedSymbol = colors.find(c => c.name === 'unknown')
      const maxColor = colors
        .reduce((acc, el, i) => el.val > acc.val ? el : acc, colors[0])
      const totalColorsVal = colors
        .filter(e => ['red', 'green', 'blue'].includes(e.name))
        .reduce((acc, color) => acc += color.val, 0)
      // find and set the selected color
      if (totalColorsVal < 150)
        selectedSymbol = colors.find(c => c.name === 'black')
      else if (totalColorsVal > 310) {
        selectedSymbol = colors.find(c => c.name === 'white')
      } else {
        selectedSymbol = maxColor
      }
      // console.log( x, y)
      out[y][x] = selectedSymbol
    }
    setSVGOut(out)
  })
  .catch(err => {
    console.error(err)
  })

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
