# laser-test.py
# create an SVG file that can be used for laser cutting

# create the file
fileName = 'laser-test.svg'
f = open(fileName, 'w')

def circleTags(radius, colWidth, rowWidth):
 tag = ''
 rowCount = 0
 totalRowCount = 10
 while rowCount < totalRowCount:
  rowIncrement = rowCount * rowWidth
  colCount = 0
  totalColCount = 10
  while colCount < totalColCount:
   colIncrement = colCount * colWidth
   tag += '<circle r="0.1" cx="{0}" cy="{1}" fill="none" stroke="black" strokeWidth="0.001" />'.format(colIncrement, rowIncrement)
   colCount += 1
  rowCount += 1
 return tag
 
colWidth = 2
rowWidth = 2
radius = 1
c = circleTags(radius, colWidth, rowWidth)
# write the contents of the SVG file
f.write('<svg width="200" height="200">')
f.write('<g transform="translate(10,10)">')
f.write(c)
f.write('</g>')

f.write('<svg>')
