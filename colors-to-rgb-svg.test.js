const test = require('tape');
const colorsToRGBSVG = require('./colors-to-rgb-svg')
const colors = require('./colors')
const imageColors = [[colors.red, colors.blue]]

test('colorsToRGBSVG', function (t) {
  const r = colorsToRGBSVG(imageColors)
  t.plan(1);
  t.equal(2 + 3, 5);
  console.log('::', r)
})
