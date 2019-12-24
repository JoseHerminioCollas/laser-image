var Jimp = require('jimp');
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-small.png'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const fD = 'color-chart.jpg'

Jimp.read(fA)
  .then(lenna => {
    const out = []
    for (const { x, y, idx, img } of lenna.scanIterator(
      0, 0, 100, 70
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
      if (totalColorsVal < 100)
        selectedSymbol = colors.find(c => c.name === 'black')
      else if (totalColorsVal > 280) {
        selectedSymbol = colors.find(c => c.name === 'white')
      } else {
        selectedSymbol = maxColor
      }
      // generate the out display
      if (x === 0) out.push('|')
      out.push(selectedSymbol.symbol)
      if (x === 99) out.push('|\n')
    }
    console.log('-'.repeat(lenna.getWidth() + 2))
    console.log(out.join(''))
    console.log('-'.repeat(lenna.getWidth() + 2))
  })
  .catch(err => {
    console.error(err)
  })
