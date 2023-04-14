# iterate pixels to generate an SVG circle tag
# that will be used for laser cutting
import math

rowS = ''
offSet = 70
r = 50
# for 12 steps 1/12 1/steps
steps = 12
angleIncrement = 0.17

i = 0
while i<steps:
 print(i)
 angleX = angleIncrement * 3.14 * i
 angleY = angleIncrement * 3.14 * i
 x = math.cos(angleX) * r + offSet
 y = math.sin(angleY) * r + offSet
 rowS += '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'.format(i + 1, y, x )
 i += 1
  
# create the file
fileName = 'laser-test-d.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg width="150mm" height="240mm">')
f.write(rowS)
f.write('<text x="100" y="239" font-size="1mm">VERICITE</text>')
f.write('</svg>')
