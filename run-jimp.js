var http = require('http');
var Jimp = require('jimp');
const colors = require('./colors')
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-small.png'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const fD = 'color-chart.jpg'

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
        str += element.map((e, rowI) => {
          return `<circle
            r="0.5"
            cx="${rowI}" 
            cy="${colI}"
            fill="${e.fillValue}"
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
      colors.red.val = lenna.bitmap.data[idx + 0]
      colors.green.val = lenna.bitmap.data[idx + 1]
      colors.blue.val = lenna.bitmap.data[idx + 2]
      let selectedColor = colors.unknown.fillValue
      const maxColor = Object.entries(colors)
        .reduce((acc, el, i) => el[1].val > acc.val ? el[1] : acc, colors.red)
      const totalColorsVal = colors.red.val + colors.green.val + colors.blue.val

      if (totalColorsVal < 150) // black
        selectedColor = colors.black
      else if (totalColorsVal > 310) { // white
        selectedColor = colors.white
      } else { // color choosen as the maximum color
        selectedColor = maxColor
      }

      // set the result that will be used
      out[y][x] = selectedColor
    }
    setSVGOut(out)
  })
  .catch(err => {
    console.error(err)
  })
