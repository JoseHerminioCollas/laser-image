var Jimp = require('jimp');
const SVGServer = require('./svg-server')
const colors = require('./colors')
const colorsToSVG = require('./colors-to-svg')
const colorsToRGBSVG = require('./colors-to-rgb-svg')
const getRGBColors = require('./get-rgb-colors')

const images = [
  'mona-small.png',
  'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg',
  'test-image.png',
  'square20x20.png',
  'color-chart.jpg'
]

Jimp.read(images[0])
  .then(lenna => {
    // get the colors definitions, convert to SVG, send to server
    const imageColors = getRGBColors(lenna, colors)
    let SVGContent = colorsToRGBSVG(imageColors)
    SVGContent += colorsToSVG(imageColors)
    SVGServer(SVGContent)
  })
  .catch(err => {
    console.error(err)
  })
