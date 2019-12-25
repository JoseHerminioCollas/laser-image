function colorsToSVG(colors) {
  const contentString = colors.map((element, colI) => {
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

  return contentString
}

module.exports = colorsToSVG
