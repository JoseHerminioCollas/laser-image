# iterate pixels to generate an SVG circle tag
# that will be used for laser cutting
import math

rowS = ''
offSet = 20
r = 1
# for 12 steps 1/12 1/steps
steps = 160
angleIncrement = 0.1
tagString = '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'

i = 0
while i < steps:
 angleX = angleIncrement * 3.14 * i
 angleY = angleIncrement * 3.14 * i
 spiralRadius = r + (i * 0.1)
 #spiralRadius = r
 x = math.cos(angleX) * spiralRadius + offSet
 y = math.sin(angleY) * spiralRadius + offSet
 circleRadius = (i * 0.005) + 0.1
 rowS += tagString.format(circleRadius, y, x)
 i += 1
  
# create the file
fileName = 'laser-test-d.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg width="40" height="40">')
f.write('<circle r="20" cx="20" cy="20" fill="none" stroke="black" stroke-width="0.01mm" />'
)
f.write('<circle r="2" cx="36.1" cy="20" fill="none" stroke="black" stroke-width="0.01mm" />'
)
f.write(rowS)
f.write('<text x="2" y="18.5" font-size="1.5">vericite</text>')
f.write('</svg>')
