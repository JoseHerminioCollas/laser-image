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
      100
    )) {
      var r = lenna.bitmap.data[idx + 0];
      var g = lenna.bitmap.data[idx + 1];
      var b = lenna.bitmap.data[idx + 2];
      const total = r + g + b
      const colors = [
        {
          name: 'red',
          val: r,
          symbol: 'R'
        }, {
          name: 'green',
          val: g,
          symbol: 'G'

        }, {
          name: 'blue',
          val: b,
          symbol: 'B'
        }
      ]
      // max pixel N below total
      const maxPixel = colors.reduce((acc, el, i) => {
        const maxColor = el.val > acc.val ? el : acc
        // console.log(maxColor, acc.val, el.val)
        return maxColor
      }, colors[1])
      // console.log(maxPixel)
      if (total < 100) { out.push('.') }
      else if (total > 800) { out.push('X') }
      else out.push(maxPixel.symbol)
      // else if (g > 200) out.push('G')
      // else if (b > 200) out.push('B')

      // else {out.push('?')}
      if (x === 99) out.push('|\n |')
    }
    console.log(out.join(''))
  })
  .catch(err => {
    console.error(err)
  })
