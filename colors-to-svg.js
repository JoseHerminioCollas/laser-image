function colorsToSVG(colors) {
  const contentString = colors.map((element, colI) => {
    let str = ''
    str += element.map((e, rowI) => {
      return `<circle
        r="0.25"
        cx="${rowI}" 
        cy="${colI}"
        fill="${e.fillValue}"
        stroke="none"
        />`
    }).join('')
    return str
  })
    .join('')

  return `<svg 
    viewBox="0 0 100 149" 
    xmlns="http://www.w3.org/2000/svg" 
    stroke="red" 
    fill="grey"
    height="600"
    >
      ${contentString}
     </svg>`
}

module.exports = colorsToSVG
