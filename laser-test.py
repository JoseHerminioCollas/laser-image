# laser-test.py
# create an SVG file that can be used for laser cutting

# create the file
fileName = 'laser-test.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg>')
rowCount = 0
totalRowCount = 10
while rowCount < totalRowCount:
 # rowIncrement = 2 * rowCount
 colCount = 0
 totalColCount = 10
 while colCount < totalColCount:
  rowIncrement = rowCount * 2
  colIncrement = colCount * 2
  circleTag = '<circle r="0.1" cx="{0}" cy="{1}" fill="none" stroke="0.001" />'.format(colIncrement, rowIncrement)
  f.write(circleTag)
  colCount += 1
 rowCount += 1
f.write('<svg>')
