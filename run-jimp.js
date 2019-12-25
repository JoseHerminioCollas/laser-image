var Jimp = require('jimp');
const SVGServer = require('./svg-server')
const colors = require('./colors')
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-small.png'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const fD = 'color-chart.jpg'


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
    const contentString = out.map((element, colI) => {
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
      return str
    })
      .join('')

    SVGServer(contentString)
  })
  .catch(err => {
    console.error(err)
  })
