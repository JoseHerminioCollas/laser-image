var Jimp = require('jimp');
const SVGServer = require('./svg-server')
const colors = require('./colors')
const colorsToSVG = require('./colors-to-svg')

const images = [
  'mona-small.png',
  'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg',
  'test-image.png',
  'square20x20.png',
  'color-chart.jpg'
]

Jimp.read(images[0])
  .then(lenna => {
    const imageColors = [...Array(149)].map(() => [...Array(100)]) // TODO get width and height of image
    for (const { x, y, idx, img } of lenna.scanIterator(
      0, 0, 100, 149
    )) {
      colors.red.val = lenna.bitmap.data[idx + 0]
      colors.green.val = lenna.bitmap.data[idx + 1]
      colors.blue.val = lenna.bitmap.data[idx + 2]
      let selectedColor = colors.unknown
      const maxColor = Object.entries(colors)
        .reduce((acc, color) => color[1].val > acc.val ? color[1] : acc, colors.red)
      const totalColorsVal = Object.entries(colors)
        .filter(color => ['red', 'green', 'blue'].includes(color[1].name))
        .reduce((acc, color) => acc + color[1].val, 0)

      if (totalColorsVal < 150) // black
        selectedColor = colors.black
      else if (totalColorsVal > 310) { // white
        selectedColor = colors.white
      } else { // color choosen as the maximum color
        selectedColor = maxColor
      }

      // set the result that will be used
      imageColors[y][x] = selectedColor
    }
    SVGServer(colorsToSVG(imageColors))
  })
  .catch(err => {
    console.error(err)
  })
