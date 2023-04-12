# laser-test.py
# create an SVG file that can be used for laser cutting

# create the file
fileName = 'laser-test.svg'
f = open(fileName, 'w')

def circleTag(radius, colWidth, rowWidth):
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
   # f.write(circleTag)
   colCount += 1
  rowCount += 1
 return tag
 
colWidth = 2
rowWidth = 2
radius = 1
c = circleTag(radius, colWidth, rowWidth)
print(c)
# write the contents of the SVG file
f.write('<svg>')
f.write(c)
f.write('<svg>')
