function colorsToRGBSVG(colors) {
  let redLayer = ''
  let blueLayer = ''
  let greenLayer = ''

  let i = 0
  while (i < colors.length) {
    let j = 0
    while (j < colors[i].length) {
      const colorName = colors[i][j].name
      if (colorName === 'red') {
        blueLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
        greenLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
      }
      else if (colorName === 'green') {
        redLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
        blueLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
      } else if (colorName === 'blue') {
        redLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
        greenLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
      } else if (colorName === 'white') {
        redLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
        greenLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
        blueLayer += `<circle r="0.25" cx="${j}" cy="${i}" />`
      }
      j += 1
    }
    i += 1
  }

  return [
    `<svg fill="red" stroke="1" viewBox="0 0 100 149" xmlns="http://www.w3.org/2000/svg" height="600">
    '${redLayer}'
    </svg>`,
    `<svg fill="green" stroke="1" viewBox="0 0 100 149" xmlns="http://www.w3.org/2000/svg" height="600">
    ${greenLayer}
    </svg>`,
    `<svg fill="blue" stroke="1" viewBox="0 0 100 149" xmlns="http://www.w3.org/2000/svg" height="600">
    ${blueLayer}
    </svg>`
  ].join('')
}
module.exports = colorsToRGBSVG
