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
   tag += '<circle r="{0}" cx="{1}" cy="{2}" fill="none" stroke="black" stroke-width="0.1" />'.format(radius, colIncrement, rowIncrement)
   colCount += 1
  rowCount += 1
 return tag

colWidth = 2
rowWidth = 2
radius = '0.1'
c = circleTags(radius, colWidth, rowWidth)
# write the contents of the SVG file
f.write('<svg width="200" height="200">')

f.write('<g transform="translate(10,10)">')
f.write(c)
f.write('</g>')

f.write('<g transform="translate(10,35)">')
f.write(circleTags('0.5', 2, 2))
f.write('</g>')

f.write('<g transform="translate(10,70)">')
f.write(circleTags('1', 3, 3))
f.write('</g>')

f.write('<g transform="translate(10,110)">')
f.write(circleTags('1', 6, 6))
f.write('</g>')

f.write('<g transform="translate(40,10)">')
f.write(circleTags('2', 6, 6))
f.write('</g>')

f.write('<g transform="translate(90,90)">')
f.write(circleTags('3', 9, 9))
f.write('</g>')

f.write('<text x="100" y="10" font-size="0.5mm">VERICITE</text>')
f.write('<text x="100" y="15" font-size="1mm">VERICITE</text>')
f.write('<text x="100" y="25" font-size="2mm">VERICITE</text>')
f.write('<text x="100" y="40" font-size="3mm">VERICITE</text>')
f.write('<text x="100" y="55" font-size="4mm">VERICITE</text>')
f.write('<text x="100" y="75" font-size="5mm">VERICITE</text>')

f.write('<svg>')
