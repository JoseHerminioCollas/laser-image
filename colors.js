const colors = {
  red:
  {
    name: 'red',
    fillValue: 'red',
    val: 0, // value found in image pixel
    symbol: 'r'
  },
  green: {
    name: 'green',
    fillValue: 'green',
    val: 0,
    symbol: 'g'

  }, blue: {
    name: 'blue',
    val: 0,
    fillValue: 'blue',
    symbol: 'b'
  },
  white: {
    name: 'white',
    fillValue: 'white',
    symbol: 'X'
  },
  black: {
    name: 'black',
    fillValue: 'black',
    symbol: ' '
  }, unknown: {
    name: 'unknown',
    fillValue: 'orange',
    symbol: '?'
  }
}

module.exports = colors
