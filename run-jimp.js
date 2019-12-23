var Jimp = require('jimp');
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-small.png'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const fD = 'color-chart.jpg'
Jimp.read(fD)
  .then(lenna => {
    console.log(lenna.bitmap)
    const out = []
    for (const { x, y, idx, img } of lenna.scanIterator(
      0,
      0,
      100,
      50
    )) {
      var red = lenna.bitmap.data[idx + 0];
      var green = lenna.bitmap.data[idx + 1];
      var blue = lenna.bitmap.data[idx + 2];
      if (red > 100) out.push('X')
      else if (green > 100) out.push('-')
      else {out.push(' ')}
      if (x === 99) out.push('\n')
    }
    console.log(out.join(''))
  })
  .catch(err => {
    console.error(err)
  })
