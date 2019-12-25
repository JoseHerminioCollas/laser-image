function colorsToRGBSVG(colors) {
  let redLayer = ''
  let blueLayer = ''
  let greenLayer = ''

  let i = 0
  while (i < colors.length) {
    let j = 0
    while (j < colors[i].length) {
      if (colors[i][j].name === 'red') {
        greenLayer += `<circle
        r="0.25"
        cx="${j}" 
        cy="${i}"
        fill="${colors[i][j].fillValue}"
        stroke="none"
        />`

      }
      j += 1
    }
    i += 1
  }

  return [redLayer, greenLayer, blueLayer].map(layer => (`<svg 
  viewBox="0 0 100 149" 
  xmlns="http://www.w3.org/2000/svg" 
  height="600"
  >
    ${layer}
   </svg>`
  ))
}

module.exports = colorsToRGBSVG
